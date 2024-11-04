import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ContactCard() {
  const [icons, setIcons] = useState([
    {
      id: 1,
      text: 'Still have questions?',
      type: 'phone',
      isHovered: false
    },
    {
      id: 2,
      text: 'Don\'t like phone calls?',
      type: 'msg',
      isHovered: false
    },
  ]);

  const handleHover = (id, status) => {
    setIcons((prevIcons) => 
      prevIcons.map((icon) => icon.id === id ? {...icon, isHovered: status} : icon)
    );
  };

  return (
    <div className="contact-info p-tb-1">
      {icons.map((icon) => (
        <div key={icon.id} className={`contact-${icon.type}`} data-aos="flip-up" data-aos-duration="500" >
          <Link to="/contact" onMouseEnter={() => handleHover(icon.id, true)} onMouseLeave={() => handleHover(icon.id, false)}>
          <i className={`fa-solid ${icon.type === 'phone' ? 'fa-phone-volume fa-xl' : 'fa-comment-dots fa-2xl'} 
          ${icon.isHovered ? (icon.type === 'phone' ? 'fa-shake fa-hover-show' : 'fa-bounce fa-hover-show') : 'fa-hover-hidden'}`}></i>
          </Link>
          <p className="s-font">{icon.text}</p>
          <Link to="/contact">Contact us <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></Link>
        </div>
      ))}
    </div>
  )
}

export default ContactCard