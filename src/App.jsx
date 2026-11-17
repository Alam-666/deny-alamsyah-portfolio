import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from './hooks/useTheme'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Leadership from './components/sections/Leadership'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen overflow-x-clip">
          <a
            href="#main"
            className="fixed top-4 left-4 z-[100] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-transform focus:translate-y-0"
          >
            Langsung ke konten
          </a>

          <Navbar />

          <main id="main">
            <Hero />
            <Marquee />
            <About />
            <Experience />
            <Leadership />
            <Contact />
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}
