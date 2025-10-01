import React from 'react';
import "./Header.css";

const Header = () => {
    return (
    <div className='main'>
        <div className='image'>
            <img src="images/image.png" alt="logo"/>
        </div> 
        <div className='entiramobile'>
            <img src="images/Entira-mobile.png" alt="entiramobile"/>
        </div>  
        <div className='header'>
            <img src="images/entira.png" alt="entira"/>
            <div className='email'>
                <p>Email us</p>
            </div>  
        </div>
        <div className='text'>
            <div className='text1'>
                <p>WELCOME TO ENTIRA</p>
            </div>
            <div className='text2'>
                <p>Where Global Elegance Meets Craftsmanship. Import-Export of Premium Fashion Jewelry.</p>
            </div>
            <div className='text3'>
                <p>At Entira, we specialize in sourcing and delivering high-quality fashion jewelry worldwide. Our unique designs blend traditional craftsmanship with modern aesthetics, bringing global trends to wholesale markets.</p>
            </div>
        </div>
        <div className='banner'>
            <div className='banner1'>
                <div className='flex-gap'>
                    <img src="images/logo1.png" alt="logo1"/>
                    <h3>Global Sourcing</h3>
                    <p>We specialize in sourcing premium fashion jewelry from top manufacturers worldwide, ensuring access to the latest trends and high-quality craftsmanship.</p>
                </div>
            </div>
            <div className='banner2'>
                <div className='flex-gap'>
                    <img src="images/logo2.png" alt="logo2"/>
                    <h3>Wholesale Partnerships</h3>
                    <p>We specialize in sourcing premium fashion jewelry from top manufacturers worldwide, ensuring access to the latest trends and high-quality craftsmanship.</p>

                </div>
            </div>
            <div className='banner3'>
                <div className='flex-gap'>
                    <img src="images/logo3.png" alt="logo3"/>
                    <h3>Custom Jewelry Design</h3>
                    <p>We specialize in sourcing premium fashion jewelry from top manufacturers worldwide, ensuring access to the latest trends and high-quality craftsmanship.</p>
                </div>
            </div>
            <div className='banner4'>
                <div className='flex-gap'>
                    <img src="images/logo4.png" alt="logo4"/>
                    <h3>Global Shipping & Logistics</h3>
                    <p>We specialize in sourcing premium fashion jewelry from top manufacturers worldwide, ensuring access to the latest trends and high-quality craftsmanship.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header; 