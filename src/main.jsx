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
import { PreloadProvider, usePreload } from './components/PreloadProvider.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function App() {
  const { loading } = usePreload();
  if (loading) return <LoadingScreen />;
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Showcase />
      <FAQS />
      <CTA />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreloadProvider>
      <App />
    </PreloadProvider>
  </StrictMode>,
)
