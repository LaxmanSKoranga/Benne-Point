const QUICK_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'About Us',  href: '#about'     },
  { label: 'Menu',      href: '#menu'      },
  { label: 'Gallery',   href: '#gallery'   },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Contact',   href: '#contact'   },
]

const INSTAGRAM_URL = 'https://www.instagram.com/bennepoint?igsh=MXNtdXBoeTFkNmRjag=='
const MAPS_URL      = 'https://maps.app.goo.gl/k3hvNyPUCFSF71st5'

const SOCIAL = [
  {
    label: 'Instagram',
    href : INSTAGRAM_URL,
    icon : (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    hoverBg: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)',
  },
  {
    label: 'Google Maps',
    href : MAPS_URL,
    icon : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    hoverBg: '#1a73e8',
  },
  {
    label: 'Swiggy',
    href : 'https://www.swiggy.com',
    icon : (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
      </svg>
    ),
    hoverBg: '#FC8019',
  },
  {
    label: 'Zomato',
    href : 'https://www.zomato.com',
    icon : (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 15.5c0-2.2 1.8-4 4-4s4 1.8 4 4H8z"/>
      </svg>
    ),
    hoverBg: '#E23744',
  },
]

function SocialIcon({ s }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
      style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(217,119,6,0.2)', color: '#b45309' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = s.hoverBg
        e.currentTarget.style.color      = '#fff'
        e.currentTarget.style.borderColor= 'transparent'
        e.currentTarget.style.transform  = 'translateY(-2px)'
        e.currentTarget.style.boxShadow  = '0 6px 16px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(251,191,36,0.1)'
        e.currentTarget.style.color      = '#b45309'
        e.currentTarget.style.borderColor= 'rgba(217,119,6,0.2)'
        e.currentTarget.style.transform  = 'translateY(0)'
        e.currentTarget.style.boxShadow  = 'none'
      }}
    >
      {s.icon}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#fdf9f3', borderTop: '1px solid rgba(217,119,6,0.12)' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand col ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex flex-col leading-none mb-4 group w-fit">
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.67rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: '#d97706', marginBottom: '4px' }}>
                Best Benne Dosa in Agra
              </span>
              <span
                className="transition-colors duration-300 group-hover:text-amber-700"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#1c1208', letterSpacing: '0.02em' }}
              >
                Benne Point
              </span>
            </a>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.8, color: '#78716c', maxWidth: '250px', marginBottom: '1.5rem' }}>
              Agra's home for authentic South Indian Benne Dosa — crispy, buttery, and made fresh every morning with love.
            </p>

            {/* Social row */}
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL.map(s => <SocialIcon key={s.label} s={s} />)}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-colors duration-300"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#57534e' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#d97706' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#57534e' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}>
              Find Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5 items-start group"
              >
                <span className="flex-shrink-0 mt-0.5 text-sm">📍</span>
                <p
                  className="transition-colors duration-300 group-hover:text-amber-700"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.65, color: '#78716c' }}
                >
                  Civil Lines, Agra — 282 002<br/>Uttar Pradesh, India
                </p>
              </a>
              <div className="flex gap-2.5 items-start">
                <span className="flex-shrink-0 mt-0.5 text-sm">📞</span>
                <a href="tel:+919876543210" className="transition-colors duration-300" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', color: '#78716c' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#d97706' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#78716c' }}>
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="flex-shrink-0 mt-0.5 text-sm">📸</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', color: '#78716c' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e1306c' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#78716c' }}
                >
                  @bennepoint
                </a>
              </div>
            </div>
          </div>

          {/* ── Hours ── */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}>
              Hours
            </h4>
            <div className="flex flex-col gap-3.5">
              {[
                { day: 'Mon – Fri', time: '7:00 AM – 10:30 PM' },
                { day: 'Sat – Sun', time: '7:00 AM – 11:00 PM' },
                { day: 'Public Holidays', time: '8:00 AM – 9:00 PM' },
              ].map(h => (
                <div key={h.day}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: '#1c1208' }}>{h.day}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.84rem', color: '#78716c', marginTop: '1px' }}>{h.time}</p>
                </div>
              ))}

              {/* Order online pills */}
              <div className="pt-3 flex flex-col gap-2">
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b45309' }}>Order Online</p>
                <div className="flex gap-2 flex-wrap">
                  <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer"
                    className="text-white rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif', background: '#FC8019', padding: '5px 12px' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}>
                    Swiggy
                  </a>
                  <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer"
                    className="text-white rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif', background: '#E23744', padding: '5px 12px' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}>
                    Zomato
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(217,119,6,0.1)' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem', color: '#a8a29e', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Benne Point. All rights reserved. &nbsp;&bull;&nbsp; Best Benne Dosa in Agra
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a key={l} href="#" className="transition-colors duration-300" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem', color: '#a8a29e' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d97706' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#a8a29e' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
