import React from "react";
import "./SupportSection.css";
 
const SupportSection = () => {
    return(
        <section>
            <div className="supportsection">
                <div className="need">
                    <p className="need1">Need Assistance?</p>
                    <div className="need2">
                        <p>Our support team is here to help with any questions or concerns. Whether you have inquiries about our products or need assistance with an order, we’ve got you covered.</p>
                    </div>
                </div>
                <div className="support">
                    <div className='support1'>
                        <div className='row-gap'>
                            <img src="images/logo4.png" alt="logo44"/>
                            <h3>Customer Care</h3>
                            <p>Our team is ready to assist with any inquiries, from product questions to order support. We're here to help you every step of the way.</p>
                            <div className="button1">
                                <p>Chat now</p>
                            </div>
                        </div>
                    </div>
                    <div className='support2'>
                        <div className='row-gap'>
                            <img src="images/logo2.png" alt="logo2"/>
                            <h3>Submit a Request</h3>
                            <p>Need more help? Submit a ticket, and we’ll respond promptly to provide the assistance you need.</p>
                            <div className="button2">
                                <p>Contact us</p>
                            </div>
                        </div>
                    </div>
                    <div className='support3'>
                        <div className='row-gap'>
                            <img src="images/logo2.png" alt="logo2"/>
                            <h3>Industry Updates</h3>
                            <p>Stay informed on the latest jewelry trends and expert tips by visiting our blog for news and updates.</p>
                            <div className="button3">
                                <p>Read now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default SupportSection;