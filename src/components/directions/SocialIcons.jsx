import React, { useState } from 'react'

function SocialIcons() {

  const [socialIcon] = useState([
    {
      id: 1,
      iconClass: 'fa-brands fa-square-facebook social-icon',
      altText: 'Facebook'
    },
    {
      id: 2,
      iconClass: 'fa-brands fa-twitter social-icon',
      altText: 'Twitter'
    },
    {
      id: 3,
      iconClass: 'fa-brands fa-instagram social-icon',
      altText: 'Instagram'
    },
    {
      id: 4,
      iconClass: 'fa-brands fa-youtube social-icon',
      altText: 'Youtube'
    }
  ]);

  return (
    <div className="socials-container">
      {socialIcon.map((icon) => (
        <i key={icon.id} className={icon.iconClass} aria-label={icon.altText}></i>
      ))}
    </div>
  );
}

export default SocialIcons