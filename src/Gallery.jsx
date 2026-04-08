import { useInView } from './hooks/useInView'
import heroImg from './assets/hero.png'

/* Each gallery slot — either an image or a styled editorial card */
const GALLERY_ITEMS = [
  { type: 'image', src: heroImg, alt: 'South Indian spread', label: null },
  { type: 'card',  label: 'Filter Coffee',      sub: 'A morning ritual',        top: 'linear-gradient(145deg,#fdf8f0 0%,#92400e 100%)' },
  { type: 'card',  label: 'Masala Dosa',        sub: 'Crispy. Golden. Perfect.', top: 'linear-gradient(145deg,#fef3c7 0%,#d97706 100%)' },
  { type: 'card',  label: 'Chutney & Sambar',   sub: 'The soul of every plate',  top: 'linear-gradient(145deg,#f0fdf4 0%,#4ade80 60%,#15803d 100%)' },
  { type: 'card',  label: 'Thatte Idli',        sub: 'Bidadi\'s finest',         top: 'linear-gradient(145deg,#ecfdf5 0%,#34d399 100%)' },
  { type: 'card',  label: 'Mysore Pak',         sub: 'Royal. Rich. Timeless.',   top: 'linear-gradient(145deg,#fff7ed 0%,#fb923c 100%)' },
]

function GalleryCard({ item, style, className }) {
  if (item.type === 'image') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={{ ...style, boxShadow: '0 4px 24px rgba(120,60,0,0.1)' }}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ display: 'block' }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'rgba(180,83,9,0.15)' }}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl flex flex-col justify-end p-6 ${className}`}
      style={{ ...style, background: item.top, boxShadow: '0 4px 24px rgba(120,60,0,0.1)' }}
    >
      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(0,0,0,0.8) 1px,transparent 1px)', backgroundSize: '18px 18px' }}
      />
      {/* Text */}
      <div className="relative">
        <p
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}
        >
          {item.sub}
        </p>
        <h3
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(1.2rem,2vw,1.6rem)', color: '#ffffff', lineHeight: 1.2 }}
        >
          {item.label}
        </h3>
      </div>
      {/* Hover overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
        style={{ background: 'rgba(0,0,0,0.15)' }}
      />
    </div>
  )
}

export default function Gallery() {
  const [headerRef, headerInView] = useInView()
  const [gridRef,   gridInView  ] = useInView({ threshold: 0.06 })

  return (
    <section id="gallery" style={{ background: '#fdf9f3', padding: '6.5rem 0 7rem' }}>
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
              Gallery
            </span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
            A Visual Taste{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>of South India</em>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: '#78716c', maxWidth: '440px', margin: '0 auto' }}>
            From aromatic coffees to golden dosas — every corner of our kitchen is a feast for the eyes.
          </p>
        </div>

        {/* ── Desktop masonry grid ── */}
        <div
          ref={gridRef}
          style={gridInView ? { animation: 'fadeUp 0.7s 0.1s ease both' } : { opacity: 0 }}
        >
          {/* Desktop: 3-col asymmetric layout */}
          <div
            className="hidden lg:grid gap-4"
            style={{ gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'repeat(3,220px)' }}
          >
            {/* Item 0: large, rows 1-2 */}
            <div className="group" style={{ gridColumn: '1', gridRow: '1 / 3' }}>
              <GalleryCard item={GALLERY_ITEMS[0]} className="h-full w-full" />
            </div>
            {/* Item 1 */}
            <div className="group" style={{ gridColumn: '2', gridRow: '1' }}>
              <GalleryCard item={GALLERY_ITEMS[1]} className="h-full w-full" />
            </div>
            {/* Item 2: rows 1-2 */}
            <div className="group" style={{ gridColumn: '3', gridRow: '1 / 3' }}>
              <GalleryCard item={GALLERY_ITEMS[2]} className="h-full w-full" />
            </div>
            {/* Item 3 */}
            <div className="group" style={{ gridColumn: '2', gridRow: '2' }}>
              <GalleryCard item={GALLERY_ITEMS[3]} className="h-full w-full" />
            </div>
            {/* Item 4: rows 3, spans cols 1-2 */}
            <div className="group" style={{ gridColumn: '1 / 3', gridRow: '3' }}>
              <GalleryCard item={GALLERY_ITEMS[4]} className="h-full w-full" />
            </div>
            {/* Item 5 */}
            <div className="group" style={{ gridColumn: '3', gridRow: '3' }}>
              <GalleryCard item={GALLERY_ITEMS[5]} className="h-full w-full" />
            </div>
          </div>

          {/* Mobile / tablet: simple 2-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className="group h-52">
                <GalleryCard item={item} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border transition-all duration-300"
            style={{
              fontFamily   : 'DM Sans, sans-serif',
              fontWeight   : 600,
              fontSize     : '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color        : '#1c1208',
              padding      : '14px 32px',
              borderColor  : 'rgba(217,119,6,0.35)',
              background   : 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background   = 'linear-gradient(135deg,#d97706,#b45309)'
              e.currentTarget.style.color        = '#fff'
              e.currentTarget.style.borderColor  = 'transparent'
              e.currentTarget.style.boxShadow    = '0 6px 22px rgba(180,83,9,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background   = 'transparent'
              e.currentTarget.style.color        = '#1c1208'
              e.currentTarget.style.borderColor  = 'rgba(217,119,6,0.35)'
              e.currentTarget.style.boxShadow    = 'none'
            }}
          >
            Explore More
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
