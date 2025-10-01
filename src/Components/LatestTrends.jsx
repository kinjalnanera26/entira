import React from "react";
import "./LatestTrends.css";
const LatestTrends = () => {
  return (
    <section>
      <div className="letesttrend">
        <div className="heading">
          <div className="heading1">
            <p>Latest Trends</p>
          </div>
          <div className="heading2">
            <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
          </div>
        </div>
        <div className="trendphotos">
          <div className="trendphoto1">
            <div className="photo1">
              <div className='arrival1'>
                  <img src='images/arrival1.png' alt="arrival1"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
              <div className='arrival2'>
                  <img src='images/arrival2.png' alt="arrival2"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
            </div>
            <div className="photo2"> 
              <div className='arrival3'>
                  <img src='images/arrival3.png' alt="arrival3"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
              <div className='arrival4'>
                  <img src='images/arrival4.png' alt="arrival4"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
            </div>  
          </div>  
          <div className="trendphoto2">
            <div className="photo3">
              <div className='arrival5'>
                  <img src='images/arrival5.png' alt="arrival5"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
              <div className='arrival6'>
                  <img src='images/arrival6.png' alt="arrival6"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
            </div>
            <div className="photo4">  
              <div className='arrival7'>
                  <img src='images/arrival7.png' alt="arrival7"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
              <div className='arrival8'>
                  <img src='images/arrival8.png' alt="arrival8"/>
                  <div>
                      <p>INQUIRE NOW</p>
                  </div>
              </div>
            </div>  
          </div>  
        </div>
        <div className="viewall">
          <a href="/ViewAllTrends">
            <p>VIEW ALL</p>
          </a> 
        </div>
      </div>   
    </section>
  );
};
export default LatestTrends;
