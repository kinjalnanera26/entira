import React, { useState } from "react";
import "./ViewAllTrends.css";

const ViewAllTrends = () => {
    const [email, setEmail] = useState("");
    
        const nameChange = (event) => {
            setEmail(event.target.value);
    };
    return(
        <section>
            <div className="alltrends">
                {/* header */}
                <div className='front'>
                    <img src="images/entira.png" alt="entira"/>
                    <div className='emailid'>
                        <p>Email us</p>
                    </div>  
                </div>
                {/* trend-gallery */}
                <div className="trendgallery">
                    <div className="trend">
                        <div className="trend1">
                            <p>Latest Trends</p>
                        </div>
                        <div className="trend2">
                            <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
                        </div>
                    </div>
                    <div className="trendimage">
                        <div className='image1'>
                            <img src='images/arrival1.png' alt="arrival1"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival2.png' alt="arrival2"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival3.png' alt="arrival3"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival4.png' alt="arrival4"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival5.png' alt="arrival5"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival6.png' alt="arrival6"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival7.png' alt="arrival7"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival8.png' alt="arrival8"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival9.png' alt="arrival9"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival10.png' alt="arrival10"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival11.png' alt="arrival11"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival12.png' alt="arrival12"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival13.png' alt="arrival3"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival14.png' alt="arrival4"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival15.png' alt="arrival15"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival16.png' alt="arrival16"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival17.png' alt="arrival7"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival18.png' alt="arrival8"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival19.png' alt="arrival9"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival20.png' alt="arrival20"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival21.png' alt="arrival21"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival22.png' alt="arrival22"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival23.png' alt="arrival23"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival24.png' alt="arrival24"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival25.png' alt="arrival25"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival26.png' alt="arrival26"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival27.png' alt="arrival27"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival28.png' alt="arrival28"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival29.png' alt="arrival29"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival30.png' alt="arrival30"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival31.png'alt="arrival31" />
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival32.png' alt="arrival32"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival33.png' alt="arrival33"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival34.png' alt="arrival34"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival35.png' alt="arrival35"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival36.png' alt="arrival36"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival37.png' alt="arrival37"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival38.png' alt="arrival38"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival39.png' alt="arrival39"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival40.png' alt="arrival40"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival41.png' alt="arrival41"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>

                        <div className='image1'>
                            <img src='images/arrival42.png' alt="arrival42"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival43.png' alt="arrival43"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival44.png' alt="arrival44"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival45.png' alt="arrival45"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival46.png' alt="arrival46"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival47.png' alt="arrival47"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival48.png' alt="arrival48"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival49.png' alt="arrival49"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival50.png' alt="arrival50"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival51.png' alt="arrival51"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival52.png' alt="arrival52"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival53.png' alt="arrival53"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival54.png' alt="arrival54"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div><div className='image1'>
                            <img src='images/arrival55.png' alt="arrival55"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival56.png' alt="arrival56"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival57.png' alt="arrival57"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival58.png' alt="arrival58"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival59.png' alt="arrival59"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                        <div className='image1'>
                            <img src='images/arrival60.png' alt="arrival60"/>
                            <div>
                                <p>INQUIRE NOW</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="footerinfo">
                    <div className="footerdetail">
                        <div className="part1">
                            <p className="head">Head Office</p>
                            <div className="info1">
                                <i className="fa-solid fa-envelope"></i>
                                <p>office@entira.co</p>
                            </div>
                            <div className="info2">
                                <i class="fa-solid fa-phone-volume"></i>
                                <p>+91 75673 99311</p>
                            </div>
                        </div>
                        <div className="part2">
                            <p className="head">Support</p>
                            <div className="data">
                                <p>Help Center</p>
                            </div>
                            <div className="data">
                                <p>Ticket</p>
                            </div>
                            <div className="data">
                                <p>Support Center</p>
                            </div>
                            <div className="data">
                                <p>Faq</p>
                            </div>
                        </div>
                        <div className="part3">
                            <p className="head">Get Exclusive Offers</p>
                            <div className="data1">
                                <p>Join our mailing list to receive exclusive discounts, sneak peeks of new arrivals, and the latest jewelry insights directly to your inbox.</p>
                            </div>
                            <div className="inputfield">
                                <input type="email" placeholder="Email" value={email} onChange={nameChange}/>
                                <div className="signup">
                                    <p>Sign up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="Developed">
                    <p>© 2024 All Rights Reserved by Entira Jewelry || Designed and Developed with ❤️ by Grafizen International LLC</p>
                </div>
            </div>   
        </section>   
    );
};

export default ViewAllTrends;