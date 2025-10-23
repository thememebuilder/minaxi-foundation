import { useEffect, useState } from 'react'

const rawBase = import.meta.env?.BASE_URL ?? '/'
const basePath = rawBase === '/' ? '' : rawBase.replace(/\/$/, '')

const subscribers = new Set()

function stripBase(pathname) {
  if (!pathname) return '/'
  if (basePath && pathname.startsWith(basePath)) {
    const stripped = pathname.slice(basePath.length) || '/'
    return stripped.startsWith('/') ? stripped : `/${stripped}`
  }
  return pathname || '/'
}

function withBase(path) {
  if (!path || path === '/') {
    return basePath || '/'
  }
  const normalised = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalised}` || '/'
}

function normalisePath(pathname) {
  const stripped = stripBase(pathname)
  if (!stripped || stripped === '/') return '/'
  return stripped.replace(/\/+$/, '') || '/'
}

function notify() {
  const path = normalisePath(window.location.pathname)
  subscribers.forEach(fn => fn(path))
}

export function navigate(to) {
  if (typeof window === 'undefined') return
  const target = normalisePath(to)
  if (target === normalisePath(window.location.pathname)) return
  window.history.pushState({}, '', withBase(target))
  notify()
}

export function usePathname() {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? normalisePath(window.location.pathname) : '/'
  )

  useEffect(() => {
    function handlePathChange(newPath) {
      setPath(normalisePath(newPath))
    }

    function handlePopState() {
      notify()
    }

    subscribers.add(handlePathChange)
    window.addEventListener('popstate', handlePopState)

    // Ensure state is in sync on mount
    handlePathChange(window.location.pathname)

    return () => {
      subscribers.delete(handlePathChange)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return path
}

export function toHref(path) {
  return withBase(path)
}

// Enable navigation via modifier keys without preventing default behaviour
export function createNavHandler(to) {
  return function onNav(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }
    event.preventDefault()
    navigate(to)
  }
}
