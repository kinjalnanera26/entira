import React from "react";
import "./Home.css";  
import Header from './Header'; 
import HeroSection from './HeroSection';
import Section from './Section';
import WhyUs from './WhyUs';
import Fashion from './Fashion';
import LatestTrends from './LatestTrends';
import Collection from './Collection';
import SupportSection from './SupportSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>  
      <HeroSection/>
      <Section/>
      <WhyUs/>
      <Fashion/>
      <LatestTrends/>
      <Collection/>
      <SupportSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
