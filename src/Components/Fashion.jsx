import React from "react";
import "./Fashion.css";

const Fashion = () => {
    return(
        <div className="fashion">
            <div className="ourvalue">
                <div className="value">
                    <p className="value1">OUR VALUE</p>
                    <p className="value2">Fashion and style in every thing we own.</p>
                    <p className="value3">Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.</p>
                    <div className="line">

                    </div>
                    <div className="quality">
                        <div className="quality1">
                            <div className="flex-col1">
                                <img src="images/download1.png" alt="download1"/>
                                <p className="col1">Expertise</p>
                                <p className="col2">Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .</p>
                            </div>
                            <div className="flex-col2">
                                <img src="images/idea.png" alt="idea"/>
                                <p className="col1">Innovation</p>
                                <p className="col2">We push the limits of traditional jewelry design, blending timeless elegance with modern creativity.</p>
                            </div>

                        </div>
                        <div className="quality2">
                            <div className="flex-col3">
                                <img src="images/ring1.png" alt="ring1"/>
                                <p className="col1">Perfection</p>
                                <p className="col2">Attention to detail is our hallmark, resulting in pieces that are not only beautiful but truly distinctive</p>
                            </div>
                            <div className="flex-col4">
                                <img src="images/flower.png" alt="flower"/>
                                <p className="col1">Evolution</p>
                                <p className="col2">Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fashionimage">
                <img src="images/latest2.png" alt="latest2"/>
            </div>

        </div>
        
    );
};
export default Fashion;