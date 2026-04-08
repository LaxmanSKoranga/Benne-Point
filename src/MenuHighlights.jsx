import { useInView } from './hooks/useInView'

const DISHES = [
  { name: 'Benne Dosa',       desc: 'Our signature crispy butter dosa — thin, golden, and drizzled with pure benne. The dish that started it all.',      price: '₹80',  badge: 'Signature',   top: 'linear-gradient(140deg,#fef3c7 0%,#fbbf24 100%)' },
  { name: 'Masala Benne Dosa',desc: 'Classic Benne Dosa stuffed with perfectly spiced potato masala, served with coconut chutney and sambar.',            price: '₹100', badge: 'Best Seller',  top: 'linear-gradient(140deg,#fff7ed 0%,#fdba74 100%)' },
  { name: 'Set Dosa',         desc: 'Soft, spongy dosa served in a set of three — a beloved Karnataka-style comfort breakfast.',                          price: '₹80',  badge: null,          top: 'linear-gradient(140deg,#fefce8 0%,#f59e0b 100%)' },
  { name: 'Ghee Podi Idli',   desc: 'Fluffy steamed idlis tossed in aromatic gunpowder spice blend and pure desi ghee — bold and satisfying.',           price: '₹80',  badge: 'Popular',     top: 'linear-gradient(140deg,#f0fdf4 0%,#6ee7b7 100%)' },
  { name: 'Rava Dosa',        desc: 'Crispy lacy semolina dosa with a delicate crunch — light yet full of flavor, served with chutneys.',                 price: '₹90',  badge: null,          top: 'linear-gradient(140deg,#fdf8f0 0%,#c4956a 100%)' },
  { name: 'Medu Vada',        desc: 'Crispy fried lentil donuts — golden on the outside, soft inside, served hot with sambar and chutney.',              price: '₹60',  badge: 'Popular',     top: 'linear-gradient(140deg,#fff7ed 0%,#fb923c 100%)' },
  { name: 'Pongal',           desc: 'Creamy rice and lentil porridge tempered with ghee, pepper, and cashews — a wholesome South Indian classic.',       price: '₹70',  badge: 'Chef Special', top: 'linear-gradient(140deg,#ecfdf5 0%,#34d399 100%)' },
  { name: 'Filter Coffee',    desc: 'Frothy South Indian decoction coffee served in a traditional dabara — the perfect end to any Benne Point meal.',     price: '₹30',  badge: 'Must Try',    top: 'linear-gradient(140deg,#fdf8f0 0%,#92400e 100%)' },
]

function DishCard({ dish, delay, inView }) {
  return (
    <div style={inView ? { animation: `fadeUp 0.55s ${delay}s ease both` } : { opacity: 0, transform: 'translateY(22px)' }}>
      <div
        className="group rounded-2xl overflow-hidden bg-white border h-full flex flex-col"
        style={{ borderColor: 'rgba(231,214,196,0.55)', boxShadow: '0 2px 14px rgba(120,60,0,0.05)', transition: 'transform 0.32s ease,box-shadow 0.32s ease' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(120,60,0,0.12)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(120,60,0,0.05)' }}
      >
        <div className="relative h-32 w-full flex-shrink-0" style={{ background: dish.top }}>
          {dish.badge && (
            <span className="absolute top-3 right-3 text-white rounded-full" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.63rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.28)', padding: '4px 10px', backdropFilter: 'blur(4px)' }}>
              {dish.badge}
            </span>
          )}
          <div className="absolute bottom-0 inset-x-0 h-10" style={{ background: 'linear-gradient(to top,rgba(255,255,255,1),transparent)' }} />
        </div>
        <div className="px-5 pt-1 pb-5 flex flex-col flex-1">
          <h3 className="mb-1.5" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.05rem', color: '#1c1208' }}>{dish.name}</h3>
          <p className="flex-1 mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.65, color: '#78716c' }}>{dish.desc}</p>
          <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'rgba(231,214,196,0.5)' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1rem', color: '#d97706' }}>{dish.price}</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 group-hover:text-amber-700" style={{ fontFamily: 'DM Sans, sans-serif', color: '#a8a29e' }}>Order →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MenuHighlights() {
  const [headerRef, headerInView] = useInView()
  const [gridRef,   gridInView  ] = useInView({ threshold: 0.06 })

  return (
    <section id="menu" style={{ background: '#ffffff', padding: '6rem 0 7rem' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-12">

        <div ref={headerRef} className="text-center mb-14" style={headerInView ? { animation: 'fadeUp 0.7s ease both' } : { opacity: 0, transform: 'translateY(20px)' }}>
          <div className="inline-flex items-center gap-2 rounded-full border mb-5" style={{ background: 'rgba(251,191,36,0.08)', borderColor: 'rgba(217,119,6,0.22)', padding: '5px 14px' }}>
            <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#d97706' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.67rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: '#b45309' }}>Our Specials</span>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.2, color: '#1c1208', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
            Signature Dishes Crafted{' '}<em style={{ fontStyle: 'italic', fontWeight: 300, color: '#b45309' }}>with Tradition</em>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.8, color: '#78716c', maxWidth: '460px', margin: '0 auto' }}>
            Every dish prepared fresh each morning — from our legendary Benne Dosa to comforting Filter Coffee.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} delay={i * 0.07} inView={gridInView} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full transition-all duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', padding: '15px 36px', background: 'linear-gradient(135deg,#d97706,#b45309)', boxShadow: '0 4px 20px rgba(180,83,9,0.28)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(180,83,9,0.42)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(180,83,9,0.28)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            View Full Menu
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
