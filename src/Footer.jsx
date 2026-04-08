const QUICK_LINKS = ['Home', 'About Us', 'Menu', 'Gallery', 'Contact']
const HREFS = ['#home', '#about', '#menu', '#gallery', '#contact']

const SOCIAL = [
  {
    label: 'Instagram',
    href : '#',
    icon : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href : '#',
    icon : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href : '#',
    icon : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l-6.75-3.75v7.5l6.75-3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-3.02.24-4.97.62-6.05A2.25 2.25 0 014.4 4.4C5.48 4.02 8 3.75 12 3.75s6.52.27 7.6.65a2.25 2.25 0 011.53 1.55c.38 1.08.62 3.03.62 6.05s-.24 4.97-.62 6.05a2.25 2.25 0 01-1.53 1.55c-1.08.38-3.6.65-7.6.65s-6.52-.27-7.6-.65a2.25 2.25 0 01-1.53-1.55C2.49 16.97 2.25 15.02 2.25 12z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href : '#',
    icon : (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#fdf9f3', borderTop: '1px solid rgba(217,119,6,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1 sm:col-span-2">
            <a href="#home" className="flex flex-col leading-none mb-4 group w-fit">
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: '#d97706', marginBottom: '4px' }}>
                South Indian
              </span>
              <span
                className="transition-colors duration-300 group-hover:text-amber-700"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.5rem', color: '#1c1208', letterSpacing: '0.03em' }}
              >
                Dakshin Delight
              </span>
            </a>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.8, color: '#78716c', maxWidth: '260px', marginBottom: '1.5rem' }}>
              Rooted in tradition. Crafted with love. Every dish at Dakshin Delight tells a story of authentic South Indian heritage.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(217,119,6,0.2)', color: '#b45309' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#d97706'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#d97706' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.1)'; e.currentTarget.style.color = '#b45309'; e.currentTarget.style.borderColor = 'rgba(217,119,6,0.2)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link, i) => (
                <li key={link}>
                  <a
                    href={HREFS[i]}
                    className="transition-colors duration-300"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#57534e' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#d97706' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#57534e' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📍', text: '12, MG Road, Basavanagudi, Bengaluru — 560 004' },
                { icon: '📞', text: '+91 98765 43210' },
                { icon: '✉️', text: 'hello@dakshin-delight.in' },
              ].map(item => (
                <div key={item.text} className="flex gap-2.5 items-start">
                  <span className="flex-shrink-0 mt-0.5 text-sm">{item.icon}</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.65, color: '#78716c' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="mb-5"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#b45309' }}
            >
              Opening Hours
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { day: 'Monday – Friday', time: '7:00 AM – 10:30 PM' },
                { day: 'Saturday – Sunday', time: '7:00 AM – 11:00 PM' },
                { day: 'Public Holidays', time: '8:00 AM – 9:00 PM' },
              ].map(h => (
                <div key={h.day}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.8rem', color: '#1c1208', marginBottom: '1px' }}>{h.day}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.84rem', color: '#78716c' }}>{h.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(217,119,6,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem', color: '#a8a29e' }}>
            &copy; {new Date().getFullYear()} Dakshin Delight. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a
                key={l}
                href="#"
                className="transition-colors duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem', color: '#a8a29e' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d97706' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#a8a29e' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
