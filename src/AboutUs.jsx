import { useInView } from './hooks/useInView'
import ownerImg from './assets/Photo.jpeg'

const FEATURES = [
  {
    emoji: '🧈',
    title: 'Signature Benne Dosa',
    desc : "Our house-made butter dosa recipe — crispy, golden, and loaded with the rich flavor of pure benne (butter) that you won't find anywhere else in Agra.",
  },
  {
    emoji: '🤝',
    title: 'Warm Hospitality',
    desc : 'Every guest is welcomed like family. True to the South Indian spirit of atithi devo bhava, we treat every visit as a celebration.',
  },
  {
    emoji: '🌿',
    title: 'Fresh Every Day',
    desc : 'We prepare our batters, chutneys, and sambar fresh every single morning using quality ingredients sourced daily.',
  },
]

function SectionBadge({ label }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border"
      style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '6px 16px', marginBottom: '1.5rem' }}
    >
      <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706', animation: 'pulseBadge 2s ease-in-out infinite' }} />
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>
        {label}
      </span>
    </div>
  )
}

function FeatureCard({ emoji, title, desc, delay }) {
  return (
    <div
      className="group rounded-2xl border transition-all duration-300 cursor-default"
      style={{ background: '#ffffff', borderColor: 'rgba(231,214,196,0.6)', padding: '20px 18px', boxShadow: '0 2px 12px rgba(120,60,0,0.06)', animation: `fadeUp 0.6s ${delay}s ease both` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(120,60,0,0.12)'; e.currentTarget.style.borderColor = 'rgba(217,119,6,0.35)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(120,60,0,0.06)'; e.currentTarget.style.borderColor = 'rgba(231,214,196,0.6)' }}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(217,119,6,0.15)' }}>
        {emoji}
      </div>
      <h4 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '0.95rem', color: '#1c1208', marginBottom: '0.4rem' }}>
        {title}
      </h4>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.7, color: '#78716c' }}>
        {desc}
      </p>
    </div>
  )
}

export default function AboutUs() {
  const [textRef,  textInView ] = useInView({ threshold: 0.1 })
  const [imgRef,   imgInView  ] = useInView({ threshold: 0.1 })
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#fdf9f3', paddingTop: '6.5rem', paddingBottom: '6.5rem' }}>

      {/* Ambient blobs */}
      <div className="absolute pointer-events-none" style={{ top: '-80px', right: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'rgba(251,191,36,0.07)', filter: 'blur(60px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(234,88,12,0.05)', filter: 'blur(50px)' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div
            ref={textRef}
            style={textInView ? { animation: 'slideInLeft 0.85s ease both' } : { opacity: 0, transform: 'translateX(-36px)' }}
          >
            <SectionBadge label="About Us" />

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.9rem,3.8vw,3rem)', lineHeight: 1.18, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1.5rem' }}>
              A Story Served<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>with Tradition</em>
            </h2>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.02rem', lineHeight: 1.9, color: '#57534e', marginBottom: '1.1rem', maxWidth: '480px' }}>
              At Benne Point, every dish is a celebration of South Indian heritage, flavor, and hospitality. Rooted in tradition yet presented with a modern touch, we bring together authentic recipes, carefully selected ingredients, and a warm dining experience that feels both comforting and memorable. From our beloved Benne Dosa to timeless breakfast favorites, every plate is crafted to reflect the soul of South Indian cuisine.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.02rem', lineHeight: 1.9, color: '#57534e', marginBottom: '2.5rem', maxWidth: '480px' }}>
              We believe great food is more than taste — it is emotion, culture, and connection. Our kitchen is inspired by family traditions, fresh preparation, and the joy of serving meals that bring people together. Whether you are visiting for a quick breakfast or a leisurely meal with family, we aim to make every experience welcoming, refined, and full of flavor.
            </p>

            {/* Feature cards */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-9">
              {cardsInView
                ? FEATURES.map(({ emoji, title, desc }, i) => (
                    <FeatureCard key={title} emoji={emoji} title={title} desc={desc} delay={i * 0.12 + 0.1} />
                  ))
                : FEATURES.map(({ title }) => <div key={title} style={{ opacity: 0, height: '160px' }} />)}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full transition-all duration-400"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', padding: '14px 30px', background: '#1c1208', boxShadow: '0 4px 16px rgba(28,18,8,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b45309'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(180,83,9,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1c1208'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(28,18,8,0.2)' }}
            >
              Discover Our Story
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* ── RIGHT: Image ── */}
          <div
            ref={imgRef}
            className="relative flex justify-center lg:justify-end"
            style={imgInView ? { animation: 'slideInRight 0.9s 0.15s ease both' } : { opacity: 0, transform: 'translateX(36px)' }}
          >
            <div className="relative w-full" style={{ maxWidth: '390px' }}>
              {/* Shadow stack layers */}
              <div className="absolute rounded-3xl" style={{ inset: 0, transform: 'translate(18px,18px)', background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.18)', borderRadius: '24px' }} />
              <div className="absolute rounded-3xl" style={{ inset: 0, transform: 'translate(9px,9px)', background: 'rgba(254,243,199,0.55)', border: '1px solid rgba(217,119,6,0.12)', borderRadius: '24px' }} />

              {/* Floating image */}
              <div className="relative" style={{ animation: imgInView ? 'float 7s ease-in-out infinite' : 'none' }}>
                <img
                  src={ownerImg}
                  alt="Benne Point — our story"
                  className="w-full object-cover"
                  style={{ aspectRatio: '3/4', borderRadius: '24px', boxShadow: '0 28px 64px rgba(92,40,0,0.2),0 8px 22px rgba(92,40,0,0.1)', display: 'block' }}
                />

                {/* Google Maps badge — bottom left */}
                <a
                  href="https://maps.app.goo.gl/k3hvNyPUCFSF71st5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex items-center gap-3 rounded-2xl transition-all duration-300"
                  style={{ bottom: '-18px', left: '-16px', background: '#ffffff', padding: '12px 16px', boxShadow: '0 8px 28px rgba(92,40,0,0.14)', border: '1px solid rgba(231,214,196,0.7)', borderRadius: '18px' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(92,40,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(92,40,0,0.14)' }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(217,119,6,0.2)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem', color: '#1c1208', lineHeight: 1 }}>4.8 ★</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.66rem', color: '#78716c', letterSpacing: '0.05em', marginTop: '2px' }}>on Google Maps</p>
                  </div>
                </a>

                {/* "New in Agra" chip — top right */}
                <div className="absolute flex items-center gap-1.5 rounded-xl" style={{ top: '-12px', right: '-12px', background: 'linear-gradient(135deg,#d97706,#b45309)', padding: '9px 14px', boxShadow: '0 6px 18px rgba(180,83,9,0.35)', borderRadius: '14px' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                    New in Agra
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
