import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot check (spam trap)
    if (data.get('_gotcha')) {
      setStatus('success')
      return
    }

    try {
      // 1) Replace "your-form-id" with your real Formspree ID from their dashboard
      //    Example endpoint: https://formspree.io/f/abcdxyz
      const endpoint = 'https://formspree.io/f/manpgqre'

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setError(body?.errors?.[0]?.message || 'Submission failed. Please email us directly.')
        setStatus('error')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="form" aria-label="Contact form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      {/* Honeypot (hidden). Bots fill this; humans won’t. */}
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true" />

      {/* Optional subject for Formspree (shows in email subject) */}
      <input type="hidden" name="_subject" value="New message from Minaxi Foundation site" />

      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className="form-success" role="status">Thanks! We’ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">{error}</p>
      )}
    </form>
  )
}
