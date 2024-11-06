import React, { useState } from 'react'

function ContactCard() {

  const [contactCard] = useState([
    {
      id: 1,
      icon: '/envelope.svg',
      headline: 'Email us',
      contentPt1: 'Please feel free to drop us a line. We will ',
      contentPt2: 'respond as soon as possible.',
      text: 'Leave a message '
    },
    {
      id: 2,
      icon: '/add-group.svg',
      headline: 'Careers',
      contentPt1: 'Sit ac ipsum leo lorem magna nunc mattis ',
      contentPt2: 'maecenas non vestibulum.',
      text: 'Send an application '
    },
  ]);

  return (

    <div className="contact-container">
      {contactCard.map((card) => (
        <div key={card.id} className="contact-card">
          <div className="contact-icon" data-aos="flip-down" data-aos-duration="500">
            <img src={card.icon} />
          </div>
          <div>
            <h2 className="sm-heading">{card.headline}</h2>
            <p className="hide-mobile p-tb-1">{card.contentPt1}<br className="hide-mobile" />{card.contentPt2}</p>
            <p className="accent p-tb-1 bold hover">{card.text}<span><i className="fa-regular fa-arrow-right"></i></span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCard