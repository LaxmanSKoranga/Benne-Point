import { useState, useEffect } from 'react'
import heroVideo from './assets/South_Indian_Restaurant_Hero_Video.mp4'

const NAV_LINKS = [
  { label: 'Home',     href: '#home'    },
  { label: 'About Us', href: '#about'   },
  { label: 'Menu',     href: '#menu'    },
  { label: 'Contact',  href: '#contact' },
]


const ORDER_PLATFORMS = [
  {
    name : 'Swiggy',
    href : 'https://www.swiggy.com/city/agra/benne-point-civil-lines-rest1325067?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder',   
    color: '#FC8019',
    icon : (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
      </svg>
    ),
  },
  {
    name : 'Zomato',
    href : 'https://www.zomato.com/agra/benne-point-kamla-nagar/order?v=o2',   // replace with actual Benne Point Zomato link
    color: '#E23744',
    icon : (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 15.5c0-2.2 1.8-4 4-4s4 1.8 4 4H8z"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 120)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  const onLight  = scrolled
  const logoSub  = onLight ? '#b45309'            : 'rgba(251,191,36,0.9)'
  const logoMain = onLight ? '#1c1208'            : '#ffffff'
  const linkClr  = onLight ? '#57534e'            : 'rgba(255,255,255,0.78)'
  const linkHov  = onLight ? '#b45309'            : '#ffffff'

  return (
    <>
      {/* ════ NAVBAR ════ */}
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={
          onLight
            ? { background: 'rgba(255,251,245,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(217,119,6,0.12)', boxShadow: '0 1px 20px rgba(120,60,0,0.07)' }
            : { background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' }
        }
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 h-[70px] flex items-center justify-between gap-4">

          {/* Brand */}
          <a href="#home" className="flex flex-col leading-none group select-none min-w-0">
            <span className="text-[9px] tracking-[0.45em] uppercase mb-0.5 transition-colors duration-500 truncate" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: logoSub }}>
              Best Benne Dosa in Agra
            </span>
            <span className="text-[19px] tracking-wide transition-colors duration-500 truncate" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: logoMain }}>
              Benne Point
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: linkClr }}
                  onMouseEnter={e => { e.currentTarget.style.color = linkHov }}
                  onMouseLeave={e => { e.currentTarget.style.color = linkClr }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Order Online button */}
            <a
              href="#menu"
              className="text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#d97706', padding: '8px 16px', border: '1px solid rgba(217,119,6,0.4)', background: 'rgba(251,191,36,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.06)' }}
            >
              Order Online
            </a>
            {/* Book Table */}
            <a
              href="#contact"
              className="text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300"
              style={
                onLight
                  ? { fontFamily: 'DM Sans, sans-serif', background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#fff', padding: '10px 20px', boxShadow: '0 4px 14px rgba(180,83,9,0.28)' }
                  : { fontFamily: 'DM Sans, sans-serif', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.9)', padding: '10px 20px' }
              }
            >
              Book Table
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none transition-colors duration-300 flex-shrink-0"
            style={{ color: onLight ? '#57534e' : 'rgba(255,255,255,0.8)' }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500"
          style={{
            maxHeight: menuOpen ? '340px' : '0',
            opacity  : menuOpen ? 1 : 0,
            background: onLight ? 'rgba(255,251,245,0.98)' : 'rgba(12,7,2,0.94)',
            backdropFilter: 'blur(20px)',
            borderTop: onLight ? '1px solid rgba(217,119,6,0.1)' : '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <ul className="flex flex-col items-center gap-5 py-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[0.28em] uppercase transition-colors duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: onLight ? '#57534e' : 'rgba(255,255,255,0.7)' }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 mt-1">
              {/* Swiggy + Zomato mini pills on mobile menu */}
              {ORDER_PLATFORMS.map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full px-4 py-2"
                  style={{ fontFamily: 'DM Sans, sans-serif', background: p.color, color: '#fff' }}
                >
                  {p.name}
                </a>
              ))}
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-[11px] tracking-[0.18em] uppercase font-semibold rounded-full"
                style={{ fontFamily: 'DM Sans, sans-serif', background: 'linear-gradient(135deg,#d97706,#b45309)', color: '#fff', padding: '11px 26px' }}
              >
                Book Table
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ════ HERO ════ */}
      <section id="home" className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          src={heroVideo}
          autoPlay muted loop playsInline
        />

        {/* Warm overlays */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,5,1,0.44)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg,rgba(10,5,1,0.82) 0%,rgba(10,5,1,0.45) 55%,rgba(10,5,1,0.08) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,rgba(8,4,0,0.32) 0%,transparent 28%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#fdf9f3 0%,rgba(253,249,243,0.55) 3.5%,transparent 14%)' }} />

        {/* Decorative mandala ring (desktop) */}
        <div className="absolute hidden lg:block pointer-events-none" style={{ top: '10%', right: '7%', opacity: 0.1 }}>
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="119" stroke="#f59e0b" strokeWidth="0.7" />
            <circle cx="120" cy="120" r="90"  stroke="#f59e0b" strokeWidth="0.7" />
            <circle cx="120" cy="120" r="60"  stroke="#f59e0b" strokeWidth="0.7" />
            <circle cx="120" cy="120" r="30"  stroke="#f59e0b" strokeWidth="0.7" />
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => {
              const r = (deg * Math.PI) / 180
              return <line key={deg} x1="120" y1="120" x2={120+119*Math.cos(r)} y2={120+119*Math.sin(r)} stroke="#f59e0b" strokeWidth="0.5" />
            })}
          </svg>
        </div>

        {/* ── Hero content ── */}
        <div
          className="relative z-10 h-full flex items-center"
          style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem' }}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
            <div
              className="max-w-[600px]"
              style={heroReady ? { animation: 'heroFadeUp 1s ease both' } : { opacity: 0 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-7 h-px flex-shrink-0" style={{ background: '#f59e0b' }} />
                <span className="text-[10px] uppercase leading-none" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, color: '#fbbf24', letterSpacing: '0.35em' }}>
                  Best Benne Dosa in Agra
                </span>
              </div>

              {/* Heading */}
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: 'clamp(2.2rem,5.5vw,4.9rem)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#ffffff', marginBottom: '0.25rem' }}>
                Experience{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#fcd34d' }}>Tradition</em>
              </h1>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(2.2rem,5.5vw,4.9rem)', lineHeight: 1.12, letterSpacing: '-0.015em', color: '#ffffff', marginBottom: '1.25rem' }}>
                on Every Leaf
              </h1>

              {/* Ornament */}
              <div className="flex items-center gap-2 mb-5">
                <span className="block w-5 h-px" style={{ background: 'rgba(245,158,11,0.5)' }} />
                <span className="block w-1 h-1 rounded-full" style={{ background: '#f59e0b' }} />
                <span className="block w-5 h-px" style={{ background: 'rgba(245,158,11,0.5)' }} />
              </div>

              {/* Subtext */}
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(0.88rem,1.5vw,1.06rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.60)', maxWidth: '420px', marginBottom: '2rem' }}>
                From our signature crispy Benne Dosa to aromatic Filter Coffee, taste the soul of authentic South India — right here in the heart of Agra.
              </p>

              {/* Google Rating badge */}
              <a
                href="https://maps.app.goo.gl/k3hvNyPUCFSF71st5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full mb-5 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '7px 14px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              >
                {/* Google G */}
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3" viewBox="0 0 24 24" fill={i <= 4 ? '#FBBC05' : 'rgba(255,255,255,0.3)'}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                  4.8 on Google
                </span>
              </a>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 mb-5">
                {/* Explore Menu */}
                <a
                  href="#menu"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full transition-all duration-500 self-start"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', padding: '13px 26px', background: 'linear-gradient(135deg,#d97706 0%,#b45309 55%,#92400e 100%)', boxShadow: '0 4px 22px rgba(180,83,9,0.38)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(180,83,9,0.55)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 22px rgba(180,83,9,0.38)' }}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)' }} />
                  <span className="relative">Explore Menu</span>
                  <span className="relative flex items-center justify-center w-6 h-6 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>

                {/* Book Table */}
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full transition-all duration-300 self-start"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', padding: '13px 26px', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(4px)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.55)'; e.currentTarget.style.color = '#fcd34d' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.72)' }}
                >
                  <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Book Table
                </a>
              </div>

              {/* Order Online — Swiggy + Zomato */}
              <div className="flex items-center gap-3 flex-wrap">
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
                  Order Online:
                </span>
                {ORDER_PLATFORMS.map(p => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full transition-all duration-300"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', padding: '7px 14px', background: p.color, boxShadow: `0 4px 14px ${p.color}55` }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 20px ${p.color}77` }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 14px ${p.color}55` }}
                  >
                    {p.icon}
                    {p.name}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About"
          className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 group border-none bg-transparent cursor-pointer"
          style={{ bottom: '1.5rem' }}
        >
          <span className="text-[9px] tracking-[0.45em] uppercase" style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.35)' }}>
            Scroll
          </span>
          <div className="w-6 h-9 rounded-full flex items-start justify-center pt-2 group-hover:border-amber-400/50 transition-colors duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.25)' }}>
            <div className="w-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.6)', animation: 'scrollDot 2s ease-in-out infinite' }} />
          </div>
        </button>

      </section>
    </>
  )
}
