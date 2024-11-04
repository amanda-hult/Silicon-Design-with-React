import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

function InfoList() {

  const [infoListItem, setInfoListItem] = useState([
    {
      id: crypto.randomUUID(),
      text: ' Banking transactions are free for you'
    },
    {
      id: crypto.randomUUID(),
      text: ' No monthly cash commission'
    },
    {
      id: crypto.randomUUID(),
      text: ' Manage payments and transactions online'
    },
  ])




  return (
    <div className="info-list" data-aos="fade-right">
      <h2 className="m-heading">Make your money <br />transfer simple and clear</h2>
      {infoListItem.map((item) => (
        <ul key={item.id}>
        <li className="m-font"><i className="fa-sharp fa-regular fa-circle-check"></i>{item.text}</li>
      </ul>
      ))}
      <HashLink smooth to="/#hero" className="learn-more-btn">Learn more <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></HashLink>
    </div>
  );
}

export default InfoList