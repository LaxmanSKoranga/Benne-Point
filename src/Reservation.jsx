import { useInView } from './hooks/useInView'

export default function Reservation() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section style={{ background: '#ffffff', padding: '6rem 0 7rem' }}>
      <div className="max-w-5xl mx-auto px-5 lg:px-12">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl text-center"
          style={{
            background: 'linear-gradient(135deg,#fffbf5 0%,#fef3c7 45%,#fde68a 100%)',
            border     : '1px solid rgba(217,119,6,0.2)',
            boxShadow  : '0 8px 48px rgba(180,83,9,0.1)',
            padding    : 'clamp(3rem,7vw,5rem) clamp(1.5rem,6vw,4rem)',
            opacity    : inView ? undefined : 0,
            transform  : inView ? undefined : 'translateY(28px)',
            animation  : inView ? 'fadeUp 0.8s ease both' : undefined,
          }}
        >
          {/* Ambient orbs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(251,191,36,0.2)', filter: 'blur(48px)' }} />
          <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full pointer-events-none" style={{ background: 'rgba(217,119,6,0.15)', filter: 'blur(40px)' }} />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border mb-6" style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(217,119,6,0.3)', padding: '5px 14px' }}>
              <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706', animation: 'pulseBadge 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>Reservations</span>
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.7rem,4vw,2.8rem)', lineHeight: 1.22, color: '#1c1208', letterSpacing: '-0.01em', maxWidth: '600px', margin: '0 auto 1.2rem' }}>
              Reserve Your Table for a{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>Memorable</em>{' '}
              Dining Experience
            </h2>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: '#78716c', maxWidth: '420px', margin: '0 auto 2.5rem' }}>
              Whether it is a cosy breakfast or a family celebration, we are ready to make your visit unforgettable.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full transition-all duration-400"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', padding: '15px 34px', background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 4px 20px rgba(180,83,9,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 32px rgba(180,83,9,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(180,83,9,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)' }} />
                <span className="relative">Book a Table</span>
                <svg className="w-4 h-4 relative" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </a>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center gap-3 rounded-full border transition-all duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1c1208', padding: '15px 34px', borderColor: 'rgba(28,18,8,0.3)', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1c1208'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1c1208' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#1c1208'; e.currentTarget.style.borderColor = 'rgba(28,18,8,0.3)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Order Online divider */}
            <div className="flex items-center gap-4 justify-center mb-5">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(180,83,9,0.2)' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.75rem', color: '#a8a29e', letterSpacing: '0.15em', textTransform: 'uppercase' }}>or order online</span>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(180,83,9,0.2)' }} />
            </div>

            {/* Swiggy + Zomato */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full transition-all duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', padding: '11px 22px', background: '#FC8019', boxShadow: '0 4px 16px rgba(252,128,25,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(252,128,25,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(252,128,25,0.4)' }}
              >
                🛵 Order on Swiggy
              </a>
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full transition-all duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', padding: '11px 22px', background: '#E23744', boxShadow: '0 4px 16px rgba(226,55,68,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(226,55,68,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(226,55,68,0.4)' }}
              >
                🍽️ Order on Zomato
              </a>
            </div>

            <p className="mt-7" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.78rem', color: '#a8a29e', letterSpacing: '0.04em' }}>
              Open daily 7:00 AM &mdash; 10:30 PM &nbsp;&bull;&nbsp; Weekends till 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
