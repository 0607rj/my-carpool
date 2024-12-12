import React, { useState } from "react";
import "../styles/helpcentre.css"; // Importing the styles for the HelpCentre

const HelpCentre = () => {
  const [open, setOpen] = useState(null); // Track which FAQ item is clicked

  // Toggle the clicked FAQ item
  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index); 
  };

  return (
     
    <div className="help-centre-content">
        <div className="help-centre">

       
      <h2>Help Centre</h2>
      <div className={`faq-item ${open === 1 ? 'open' : ''}`} onClick={() => toggleAnswer(1)}>
        <h3>How to use Carpool?</h3>
        {open === 1 && <p className="faq-answer">Simply sign up, enter your destination, and search for available rides.</p>}
      </div>
      <div className={`faq-item ${open === 2 ? 'open' : ''}`} onClick={() => toggleAnswer(2)}>
        <h3>How do I offer a ride?</h3>
        {open === 2 && <p className="faq-answer">After logging in, go to the "Offer a Ride" section, fill out the details, and publish your ride.</p>}
      </div>
      <div className={`faq-item ${open === 3 ? 'open' : ''}`} onClick={() => toggleAnswer(3)}>
        <h3>Is there a fee for carpooling?</h3>
        {open === 3 && <p className="faq-answer">The fee depends on the ride offer. You can set the fee when posting your ride details.</p>}
      </div>
      <div className={`faq-item ${open === 4 ? 'open' : ''}`} onClick={() => toggleAnswer(4)}>
        <h3>How do I contact support?</h3>
        {open === 4 && <p className="faq-answer">If you have issues, you can contact us via the "Contact Us" page or directly email us at support@ecodrive.com.</p>}
      </div>
    </div>
    </div>
  );
};

export default HelpCentre;
