import { useState } from 'react'
import { useInView } from './hooks/useInView'

const INFO = [
  {
    icon : <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
    label: 'Address',
    lines: ['Benne Point Restaurant', 'Civil Lines, Agra — 282 002', 'Uttar Pradesh, India'],
    link : { href: 'https://maps.app.goo.gl/k3hvNyPUCFSF71st5', text: 'Get Directions →' },
  },
  {
    icon : <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
    label: 'Phone',
    lines: ['+91 98765 43210'],
    link : { href: 'tel:+919876543210', text: 'Call us now →' },
  },
  {
    icon : <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>,
    label: 'Email',
    lines: ['hello@bennepoint.in'],
    link : null,
  },
  {
    icon : <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    label: 'Opening Hours',
    lines: ['Mon – Fri: 7:00 AM – 10:30 PM', 'Sat – Sun: 7:00 AM – 11:00 PM'],
    link : null,
  },
]

function InputField({ label, name, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.06em', color: '#57534e' }}>
        {label} {required && <span style={{ color: '#d97706' }}>*</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        required={required}
        className="w-full rounded-xl px-4 py-3 outline-none transition-all duration-200"
        style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.93rem', color: '#1c1208', background: '#ffffff', border: `1.5px solid ${focused ? '#d97706' : 'rgba(214,211,208,0.8)'}`, boxShadow: focused ? '0 0 0 3px rgba(217,119,6,0.1)' : 'none' }}
      />
    </div>
  )
}

export default function Contact() {
  const [leftRef,  leftInView ] = useInView({ threshold: 0.1 })
  const [rightRef, rightInView] = useInView({ threshold: 0.1 })
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSubmitted(true); setForm({ name: '', email: '', message: '' }); setTimeout(() => setSubmitted(false), 4500) }, 1200)
  }

  return (
    <section id="contact" style={{ background: '#ffffff', padding: '6.5rem 0 7rem' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14" style={{ animation: 'fadeUp 0.7s ease both' }}>
          <div className="inline-flex items-center gap-2 rounded-full border mb-5" style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '5px 14px' }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>Contact</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
            Visit Us or{' '}<em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>Get in Touch</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — info */}
          <div ref={leftRef} style={leftInView ? { animation: 'slideInLeft 0.8s ease both' } : { opacity: 0, transform: 'translateX(-30px)' }}>

            <div className="flex flex-col gap-6 mb-8">
              {INFO.map(item => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(217,119,6,0.2)', color: '#d97706' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.73rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b45309', marginBottom: '4px' }}>{item.label}</p>
                    {item.lines.map(l => (
                      <p key={l} style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.7, color: '#57534e' }}>{l}</p>
                    ))}
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-1 transition-colors duration-200" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: '#d97706' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#b45309' }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#d97706' }}>
                        {item.link.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed card */}
            <a
              href="https://maps.app.goo.gl/k3hvNyPUCFSF71st5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border transition-all duration-300 group"
              style={{ background: '#fdf9f3', borderColor: 'rgba(217,119,6,0.25)', padding: '18px 20px', boxShadow: '0 2px 12px rgba(120,60,0,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(120,60,0,0.12)'; e.currentTarget.style.borderColor = 'rgba(217,119,6,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(120,60,0,0.06)'; e.currentTarget.style.borderColor = 'rgba(217,119,6,0.25)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fef3c7,#fde68a)' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1rem', color: '#1c1208' }}>Find Us on Google Maps</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#78716c', marginTop: '2px' }}>Tap to open directions in Google Maps</p>
              </div>
              <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="#d97706" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          {/* Right — form */}
          <div ref={rightRef} style={rightInView ? { animation: 'slideInRight 0.8s 0.1s ease both' } : { opacity: 0, transform: 'translateX(30px)' }}>
            <div className="rounded-2xl p-8 border" style={{ background: '#fdf9f3', borderColor: 'rgba(231,214,196,0.6)', boxShadow: '0 2px 20px rgba(120,60,0,0.06)' }}>
              {submitted ? (
                <div className="text-center py-12" style={{ animation: 'fadeUp 0.5s ease both' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                    <svg className="w-7 h-7" fill="none" stroke="#16a34a" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.4rem', color: '#1c1208', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.95rem', color: '#78716c' }}>Thank you! We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.3rem', color: '#1c1208', marginBottom: '0.3rem' }}>Send Us a Message</h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.87rem', color: '#78716c' }}>We respond within 24 hours.</p>
                  </div>
                  <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                  <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.06em', color: '#57534e' }}>Message <span style={{ color: '#d97706' }}>*</span></label>
                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} required className="w-full rounded-xl px-4 py-3 outline-none transition-all duration-200 resize-none" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.93rem', color: '#1c1208', background: '#ffffff', border: '1.5px solid rgba(214,211,208,0.8)' }}
                      onFocus={e => { e.currentTarget.style.border = '1.5px solid #d97706'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.1)' }}
                      onBlur={e => { e.currentTarget.style.border = '1.5px solid rgba(214,211,208,0.8)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>
                  <button type="submit" disabled={sending} className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl transition-all duration-300 mt-1"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', padding: '15px', background: sending ? 'rgba(180,83,9,0.7)' : 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 4px 18px rgba(180,83,9,0.28)', cursor: sending ? 'not-allowed' : 'pointer' }}>
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)' }} />
                    {sending ? 'Sending...' : 'Send Message'}
                    {!sending && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
