// import React from 'react';
// import WhatsAppWidget from 'react-whatsapp-widget';
// // import 'react-whatsapp-widget/dist/index.css';


// const WhatsAppButton = () => {
//   return (
//     <WhatsAppWidget
//       phoneNumber="1234567890" // Replace with your WhatsApp phone number
//       companyName="My Company" // Replace with your company name
//       message="Hello, I have a question." // Replace with your initial message
//     />
//   );
// }

// export default WhatsAppButton;

import React from 'react';
import { WhatsApp } from '@mui/icons-material';
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace the URL with your WhatsApp API URL
    const apiURL = 'https://api.whatsapp.com/send?phone=08164520367&text=Hello,%20I%20have%20a%20question.';

    window.open(apiURL, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
          <WhatsApp className="whatsapp-icon" />
    </div>
  );
}

export default WhatsAppButton;
