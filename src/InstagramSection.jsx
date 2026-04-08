import { useEffect } from 'react'
import { useInView } from './hooks/useInView'

const INSTAGRAM_HANDLE = 'bennepoint'
const INSTAGRAM_URL    = 'https://www.instagram.com/bennepoint?igsh=MXNtdXBoeTFkNmRjag=='

/*
  Add more reels here — Instagram → post → ⋯ → Embed → copy the URL in data-instgrm-permalink
  Make sure URL ends with  ?utm_source=ig_embed&utm_campaign=loading
*/
const REAL_POSTS = [
  'https://www.instagram.com/reel/DWIsOEpk-3a/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DQ3__Vckx7k/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DQyI6I_E9q6/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DQCBBlfk8A9/?utm_source=ig_embed&utm_campaign=loading',
  'https://www.instagram.com/reel/DQn188AE44R/?utm_source=ig_embed&utm_campaign=loading',
]

/* Load embed.js once globally */
function useInstagramScript() {
  useEffect(() => {
    const ID = 'ig-embed-js'
    if (document.getElementById(ID)) {
      window.instgrm?.Embeds.process()
      return
    }
    const s  = document.createElement('script')
    s.id     = ID
    s.src    = 'https://www.instagram.com/embed.js'
    s.async  = true
    s.onload = () => { setTimeout(() => window.instgrm?.Embeds.process(), 100) }
    document.body.appendChild(s)
  }, [])
}

/* Single embed — fixed height clips caption/hashtag section, shows only video */
function EmbedCard({ permalink }) {
  return (
    <div
      className="flex-shrink-0"
      style={{
        width          : 'min(320px, 80vw)',
        height         : '430px',
        scrollSnapAlign: 'start',
        borderRadius   : '16px',
        overflow       : 'hidden',
        border         : '1px solid rgba(231,214,196,0.8)',
        boxShadow      : '0 2px 16px rgba(120,60,0,0.07)',
        background     : '#fff',
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          margin      : '0 !important',
          maxWidth    : '100% !important',
          minWidth    : '0 !important',
          width       : '100% !important',
          border      : 'none !important',
          borderRadius: '0 !important',
          boxShadow   : 'none !important',
          padding     : '0',
        }}
      />
    </div>
  )
}

export default function InstagramSection() {
  useInstagramScript()

  const [headerRef, headerInView] = useInView()
  const [rowRef,    rowInView   ] = useInView({ threshold: 0.04 })

  return (
    <section
      id="instagram"
      style={{ background: '#faf6f0', paddingTop: '6rem', paddingBottom: '7rem', overflow: 'hidden' }}
    >
      {/* Override Instagram's fixed max-width globally for this section */}
      <style>{`
        .ig-embed-wrapper .instagram-media {
          max-width: 100% !important;
          min-width: 0 !important;
          width: 100% !important;
        }
        /* Hide scrollbar but keep scroll */
        .ig-scroll-row { scrollbar-width: none; -ms-overflow-style: none; }
        .ig-scroll-row::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 lg:px-12">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10"
          style={headerInView ? { animation: 'fadeUp 0.7s ease both' } : { opacity: 0, transform: 'translateY(20px)' }}
        >
          <div>
            {/* Instagram badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border mb-4"
              style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '5px 14px' }}
            >
              <span
                className="block w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}
              />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>
                Instagram
              </span>
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em' }}>
              Follow Us{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>@{INSTAGRAM_HANDLE}</em>
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.98rem', lineHeight: 1.8, color: '#78716c', maxWidth: '380px', marginTop: '0.6rem' }}>
              Our reels, behind-the-scenes moments, and the daily love that goes into every plate.
            </p>
          </div>

          {/* Profile pill */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto flex-shrink-0 inline-flex items-center gap-3 rounded-2xl border transition-all duration-300 group"
            style={{ background: '#fff', borderColor: 'rgba(231,214,196,0.7)', padding: '13px 18px', boxShadow: '0 2px 12px rgba(120,60,0,0.06)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(120,60,0,0.12)'; e.currentTarget.style.borderColor = 'rgba(217,119,6,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(120,60,0,0.06)'; e.currentTarget.style.borderColor = 'rgba(231,214,196,0.7)' }}
          >
            {/* Avatar ring */}
            <div className="w-10 h-10 rounded-full p-0.5 flex-shrink-0" style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}>
              <div className="w-full h-full rounded-full flex items-center justify-center text-lg" style={{ background: 'linear-gradient(135deg,#fef3c7,#fde68a)' }}>
                🫓
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.87rem', color: '#1c1208' }}>@{INSTAGRAM_HANDLE}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.72rem', color: '#78716c', marginTop: '1px' }}>Benne Point · Agra</p>
            </div>
            <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#e1306c' }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>

        {/* ── Horizontal scroll carousel ── */}
        <div
          ref={rowRef}
          style={rowInView ? { animation: 'fadeUp 0.6s 0.1s ease both' } : { opacity: 0 }}
        >
          <div
            className="ig-scroll-row ig-embed-wrapper flex gap-4 overflow-x-auto pb-3"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {REAL_POSTS.map((url, i) => (
              <EmbedCard key={i} permalink={url} />
            ))}
          </div>

          {/* Scroll hint — amber dots */}
          <div className="flex items-center gap-2 mt-5 justify-center">
            {REAL_POSTS.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width     : i === 0 ? '22px' : '6px',
                  height    : '6px',
                  background: i === 0 ? '#d97706' : 'rgba(217,119,6,0.22)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full transition-all duration-400"
            style={{
              fontFamily   : 'DM Sans, sans-serif',
              fontWeight   : 600,
              fontSize     : '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color        : '#fff',
              padding      : '14px 30px',
              background   : 'linear-gradient(135deg,#f09433 0%,#dc2743 55%,#bc1888 100%)',
              boxShadow    : '0 4px 20px rgba(220,39,67,0.32)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(220,39,67,0.48)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(220,39,67,0.32)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)' }} />
            <svg className="w-4 h-4 relative flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="relative">Follow @{INSTAGRAM_HANDLE}</span>
          </a>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.8rem', color: '#a8a29e' }}>
            Tag us &nbsp;<span style={{ color: '#e1306c', fontWeight: 500 }}>#BennePoint</span>
          </p>
        </div>

      </div>
    </section>
  )
}
