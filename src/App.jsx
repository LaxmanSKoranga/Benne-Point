import Hero              from './Hero'
import AboutUs           from './AboutUs'
import MenuHighlights    from './MenuHighlights'
import WhyChooseUs       from './WhyChooseUs'
import Gallery           from './Gallery'
import Testimonials      from './Testimonials'
import InstagramSection  from './InstagramSection'
import Reservation       from './Reservation'
import Contact           from './Contact'
import Footer            from './Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <AboutUs />
        <MenuHighlights />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <InstagramSection />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
