import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Showcase from './components/showcase.jsx'
import Feature from './components/feature.jsx'
import About from './components/about.jsx'
import FAQS from './components/faqs.jsx'
import CTA from './components/cta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Feature />
    <Showcase />
    <FAQS />
    <CTA />
  </StrictMode>,
)
