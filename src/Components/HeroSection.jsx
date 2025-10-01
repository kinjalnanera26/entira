import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className='herosection'>
            <div className='herosection_text'>
                <div className='herosection_text1'>
                    <p>WHO WE ARE</p>
                </div>
                <div className='herosection_text2'>
                    <p>Global Fashion Jewelry Experts With Roots in Global Trade</p>
                </div>
                <div className='herosection_text3'>
                    <p>With decades of expertise in the jewelry industry, we blend traditional craftsmanship with modern innovation to bring you exceptional</p>
                </div>
                <div className='herosection_text4'>
                    <p> INQUIRE NOW</p>
                </div>
            </div>
            <div className='herosection_image'>
                <div className='image1'>
                    <img src="images\add-Bsn4PIUd.png" alt="add-Bsn4PIUd"/>
                </div>  
                <div className='image2'>
                    <div className='image2part'>
                        <img src="images/ring.png" alt="ring"/>
                        <div className='text5'>
                            <p>Expert Jewelry Craft</p>
                        </div>
                        <div className='text6'>
                            <p>Our artisans specialize in creating custom-designed jewelry, crafted to meet your unique style and needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default HeroSection;