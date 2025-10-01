import React, { useState } from "react";
import "./WhyUs.css";

 
const WhyUS = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    
      const activeSlide = (index) => {
        setActiveIndex(index);
      };

    return(
        <div className="whyus">
            <div className="highlights">
                <p className="highlight1">Why Choose us</p>
                <p className="highlight2">Jewelry Crafted Just for You</p>
                <div className="highlight3">
                    <p>Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.</p>
                </div>
            </div>
            <div className="slider">
                <div className="benefits" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    <div className='benefit1'>
                        <div className='column-gap'>
                            <img src="images/logo4.png" alt="logo4"/>
                            <h3>Top-Grade Materials</h3>
                            <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>
                        </div>
                    </div>
                    <div className='benefit2'>
                        <div className='column-gap'>
                            <img src="images/logo2.png" alt="logo2"/>
                            <h3>Master Craftsmanship</h3>
                            <p>Our team of professional jewelers brings decades of experience and artistry to each design. Every piece is crafted with meticulous attention to detail</p>
                        </div>
                    </div>
                    <div className='benefit3'>
                        <div className='column-gap'>
                            <img src="images/helpcare.png" alt="helpcare"/>
                            <h3>Around-the-Clock Support</h3>
                            <p>Our customer support team is available around the clock to assist with any inquiries or needs</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="plan-dots">
                <span className={activeIndex === 0 ? "active" : ""} onClick={() => activeSlide(0)}></span>
                <span className={activeIndex === 1 ? "active" : ""} onClick={() => activeSlide(1)}></span>
                <span className={activeIndex === 2 ? "active" : ""} onClick={() => activeSlide(2)}></span>  
            </div> 
        </div>
    );
};

export default WhyUS;

