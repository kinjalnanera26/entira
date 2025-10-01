import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
    const [email, setEmail] = useState("");

    const nameChange = (event) => {
        setEmail(event.target.value);
    };
    return(
        <div className="bottom">
            <div className="fotter">
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
            <div className="info">
                <p>© 2024 All Rights Reserved by Entira Jewelry || Designed and Developed with ❤️ by Grafizen International LLC</p>
            </div>
        </div>
  
    );
};
export default Footer;