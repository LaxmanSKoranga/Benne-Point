import { useInView } from './hooks/useInView'

const FEATURES = [
  {
    title: 'Authentic Recipes',
    desc : 'Every dish traces back to age-old South Indian family recipes, preserving the taste of tradition in every single bite.',
    icon : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
        <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
      </svg>
    ),
    accent: '#d97706',
    bg    : 'rgba(251,191,36,0.08)',
    border: 'rgba(217,119,6,0.18)',
  },
  {
    title: 'Fresh Ingredients',
    desc : 'We source the freshest local produce, aromatic spices, and premium-quality ingredients daily to ensure genuine, wholesome flavours.',
    icon : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 12 7 8 7 4a5 5 0 0 1 10 0c0 4-5 8-5 8z" />
        <path d="M12 12c0 0-4 2.5-4 6" />
        <path d="M12 12c0 0 4 2.5 4 6" />
      </svg>
    ),
    accent: '#16a34a',
    bg    : 'rgba(134,239,172,0.1)',
    border: 'rgba(22,163,74,0.18)',
  },
  {
    title: 'Warm Hospitality',
    desc : 'Inspired by the spirit of Atithi Devo Bhava, every guest is welcomed like family — with warmth, care, and genuine South Indian grace.',
    icon : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    accent: '#dc2626',
    bg    : 'rgba(252,165,165,0.1)',
    border: 'rgba(220,38,38,0.18)',
  },
  {
    title: 'Premium Dining Experience',
    desc : 'From the moment you walk in to the last sip of filter coffee, every detail is thoughtfully crafted to make your visit truly memorable.',
    icon : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: '#7c3aed',
    bg    : 'rgba(196,181,253,0.1)',
    border: 'rgba(124,58,237,0.18)',
  },
]

function FeatureCard({ feature, delay, inView }) {
  return (
    <div
      style={
        inView
          ? { animation: `fadeUp 0.6s ${delay}s ease both` }
          : { opacity: 0, transform: 'translateY(22px)' }
      }
    >
      <div
        className="h-full rounded-2xl bg-white border p-7 flex flex-col"
        style={{
          borderColor: 'rgba(231,214,196,0.55)',
          boxShadow  : '0 2px 14px rgba(120,60,0,0.05)',
          transition : 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 20px 44px rgba(120,60,0,0.11)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 14px rgba(120,60,0,0.05)'
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
          style={{ background: feature.bg, border: `1px solid ${feature.border}` }}
        >
          <div className="w-6 h-6" style={{ color: feature.accent }}>
            {feature.icon}
          </div>
        </div>

        <h3
          className="mb-2.5"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.12rem', color: '#1c1208' }}
        >
          {feature.title}
        </h3>
        <p
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.75, color: '#78716c' }}
        >
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const [headerRef, headerInView] = useInView()
  const [cardsRef,  cardsInView ] = useInView({ threshold: 0.08 })

  return (
    <section style={{ background: '#faf6f0', padding: '6.5rem 0 7rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={headerInView ? { animation: 'fadeUp 0.7s ease both' } : { opacity: 0, transform: 'translateY(20px)' }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border mb-5"
            style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '5px 14px' }}
          >
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>
              Why Choose Us
            </span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
            More Than a Meal,{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>an Experience</em>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: '#78716c', maxWidth: '460px', margin: '0 auto' }}>
            We go beyond good food — delivering a complete dining experience rooted in culture, quality, and heartfelt service.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.1} inView={cardsInView} />
          ))}
        </div>

      </div>
    </section>
  )
}
