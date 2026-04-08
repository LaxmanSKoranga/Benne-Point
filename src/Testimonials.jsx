import { useInView } from './hooks/useInView'

const REVIEWS = [
  {
    name  : 'Rohan Gupta',
    role  : 'Food Enthusiast, Agra',
    stars : 5,
    review: "Best dosa I have had outside of Karnataka! The Benne Dosa at Benne Point is absolutely authentic — crispy, golden, and loaded with butter. I was genuinely surprised to find this quality in Agra. Coming back every weekend for sure!",
    init  : 'RG',
    accent: '#d97706',
    bg    : '#fef3c7',
  },
  {
    name  : 'Priya Singh',
    role  : 'Regular Guest',
    stars : 5,
    review: "Agra finally has a place for truly authentic South Indian breakfast! The Filter Coffee and Masala Benne Dosa here are unbeatable. The place is clean, the staff is so warm and friendly. Highly recommend to everyone in Agra.",
    init  : 'PS',
    accent: '#b45309',
    bg    : '#fff7ed',
  },
  {
    name  : 'Amit Sharma',
    role  : 'Food Blogger',
    stars : 5,
    review: "I was skeptical about South Indian food in Agra but Benne Point completely changed my mind. Their Benne Dosa rivals the ones I have had in Bengaluru. Incredible freshness, amazing quality, and such a welcoming atmosphere.",
    init  : 'AS',
    accent: '#15803d',
    bg    : '#f0fdf4',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : '#e5e7eb'}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ review, delay, inView }) {
  return (
    <div style={inView ? { animation: `fadeUp 0.6s ${delay}s ease both` } : { opacity: 0, transform: 'translateY(22px)' }}>
      <div
        className="h-full rounded-2xl bg-white border flex flex-col p-7"
        style={{ borderColor: 'rgba(231,214,196,0.5)', boxShadow: '0 2px 16px rgba(120,60,0,0.05)', transition: 'transform 0.3s ease,box-shadow 0.3s ease' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(120,60,0,0.1)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(120,60,0,0.05)' }}
      >
        {/* Google badge */}
        <div className="flex items-center justify-between mb-1">
          <div className="text-4xl leading-none select-none" style={{ fontFamily: 'Georgia, serif', color: 'rgba(217,119,6,0.18)', lineHeight: 1 }}>&ldquo;</div>
          <a
            href="https://maps.app.goo.gl/k3hvNyPUCFSF71st5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-300"
            style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(217,119,6,0.18)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.08)' }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.65rem', color: '#b45309' }}>Google</span>
          </a>
        </div>

        <Stars count={review.stars} />

        <p className="flex-1 mb-6" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.93rem', lineHeight: 1.8, color: '#57534e' }}>
          {review.review}
        </p>

        <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'rgba(231,214,196,0.5)' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold" style={{ background: review.bg, color: review.accent, fontFamily: 'DM Sans, sans-serif' }}>
            {review.init}
          </div>
          <div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '0.95rem', color: '#1c1208', lineHeight: 1.2 }}>{review.name}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.73rem', color: '#a8a29e', letterSpacing: '0.04em', marginTop: '2px' }}>{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView ] = useInView({ threshold: 0.08 })

  return (
    <section style={{ background: '#fdf9f3', padding: '6.5rem 0 7rem' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-12">

        <div ref={headerRef} className="text-center mb-14" style={headerInView ? { animation: 'fadeUp 0.7s ease both' } : { opacity: 0, transform: 'translateY(20px)' }}>
          <div className="inline-flex items-center gap-2 rounded-full border mb-5" style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '5px 14px' }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>Testimonials</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
            What Agra Is{' '}<em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>Saying About Us</em>
          </h2>

          {/* Overall Google Rating */}
          <a
            href="https://maps.app.goo.gl/k3hvNyPUCFSF71st5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border transition-all duration-300"
            style={{ background: '#fff', borderColor: 'rgba(217,119,6,0.25)', padding: '10px 20px', boxShadow: '0 2px 12px rgba(120,60,0,0.06)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(120,60,0,0.12)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(120,60,0,0.06)' }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill={i <= 4 ? '#FBBC05' : '#e5e7eb'}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#1c1208' }}>4.8</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: '#78716c' }}>on Google &bull; View all reviews</span>
          </a>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <TestimonialCard key={r.name} review={r} delay={i * 0.12} inView={cardsInView} />
          ))}
        </div>

      </div>
    </section>
  )
}
