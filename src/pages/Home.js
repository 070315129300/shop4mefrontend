import React from 'react';
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <div className="maintenance-message">
        <h1>Website Under Maintenance</h1>
        <p>We apologize for the inconvenience. Kindly use our mobile app for your shopping.</p>
        <div className="row">
          <div className="col-6">
            <small>
              <a href="https://apps.apple.com/ng/app/shop4me/id6449968422" target="_blank" rel="noopener noreferrer">
                <img src="images/appstorelogo.png" style={{ height: '50px', width: '150px' }} alt="App Store" />
              </a>
            </small>
          </div>
          <div className="col-6">
            <small>
              <a href="https://play.google.com/store/apps/details?id=com.blackjoe.shop4me" target="_blank" rel="noopener noreferrer">
                <img src="images/playstorelogo.png" style={{ height: '50px', width: '150px' }} alt="Play Store" />
              </a>
            </small>
          </div>
        </div>

        <div>
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
};

export default Home;
