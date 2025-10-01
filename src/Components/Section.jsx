import React from 'react';
import "./Section.css";

const Section= () => {
    return (
        <div className='section'>
           <div className='hello'>
              
           </div>
            <div className='image3'>
                <img src="images/jwellery.png" alt="jwellery"/>
            </div> 
            <div className='section1'>
                <div className='sec1'>
                    <p>Explore Collections</p>   
                </div>
                <div className='sec2'>
                    <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
                </div>
            </div>
            <div className='section2'>
                <div className='sec3'>
                    <p>Best Selling Designs</p>
                    <div className='border'></div>
                </div>
                <div className='sec4'>
                    <div className='cate1'>
                        <img src='images/cate1.png' alt="cate1"/>
                        <div>
                            <p>INQUIRE NOW</p>
                        </div>
                    </div>
                    <div className='cate2'>
                        <img src='images/cate2.png' alt="cate2"/>
                        <div>
                            <p>INQUIRE NOW</p>
                        </div>
                    </div>
                    <div className='cate3'>
                        <img src='images/cate3.png' alt="cate3"/>
                        <div>
                            <p>INQUIRE NOW</p>
                        </div>
                    </div>
                    <div className='cate4'>
                        <img src='images/cate4.png' alt="cate4"/>
                        <div>
                            <p>INQUIRE NOW</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Section;


