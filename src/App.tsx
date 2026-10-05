import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParticleBackground from './components/effects/ParticleBackground'
import GradientBlobs from './components/effects/GradientBlobs'
import Hero from './components/sections/Hero'

const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const AWSServices = lazy(() => import('./components/sections/AWSServices'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Timeline = lazy(() => import('./components/sections/Timeline'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const Tools = lazy(() => import('./components/sections/Tools'))
const Contact = lazy(() => import('./components/sections/Contact'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen noise-bg">
      <ParticleBackground />
      <GradientBlobs />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Skills />
          <AWSServices />
          <Projects />
          <Experience />
          <Timeline />
          <Certifications />
          <Tools />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </div>
  )
}
