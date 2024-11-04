import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

function PaymentDetails() {
  const [paymentDetails, setPaymentDetails] = useState([
    {
      id: crypto.randomUUID(),
      image: '/payment-icon.svg',
      text: 'Manage your payments online. Mollis congue egestas egestas fermentum fames.'
    },
    {
      id: crypto.randomUUID(),
      image: '/cashback-icon.svg',
      text: 'A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.'
    },
  ]);

  return (
    <div className="payment-details" data-aos="fade-left">
      <h2 className="m-heading">Receive payment from <br />international bank details</h2>
      {paymentDetails.map((card) => (
        <div className="payment-info" key={card.id}>
          <img src={card.image} />
          <p className="m-font">{card.text}</p>
        </div>
      ))}
      <HashLink smooth to="/#hero" className="learn-more-btn">Learn more <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></HashLink>
    </div>
  );
}

export default PaymentDetails