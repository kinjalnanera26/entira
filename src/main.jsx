import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Section from './Components/Section.jsx'
import WhyUs from './Components/WhyUs.jsx'
import Fashion from './Components/Fashion.jsx'
import LatestTrends from './Components/LatestTrends.jsx'
import Collection from './Components/Collection.jsx'
import SupportSection from './Components/SupportSection.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <HeroSection/>
    <Section/>
    <WhyUs/>
    <Fashion/>
    <LatestTrends/>
    <Collection/>
    <SupportSection/>
    <Footer/>
  </StrictMode>,
)
