import React, { useState } from 'react'

function PartnerLogos() {

  const [logos] = useState([
    {
      id: 1,
      img: "/logoipsum1.svg",
      isDesktop: false
    },
    {
      id: 2,
      img: "/logoipsum2.svg",
      isDesktop: false
    },
    {
      id: 3,
      img: "/logoipsum3.svg",
      isDesktop: false
    },
    {
      id: 4,
      img: "/logoipsum4.svg",
      isDesktop: false
    },
    {
      id: 5,
      img: "/logoipsum5.svg",
      isDesktop: true
    },
    {
      id: 6,
      img: "/logoipsum6.svg",
      isDesktop: true
    },
  ]);

  return (
    <div className="logos">
      {logos.map((logo) => (
        <img key={logo.id} className={`logo p-1 ${logo.isDesktop ? 'logo-desktop' : ''}`} src={logo.img} />
      ))}
    </div>
  )
}

export default PartnerLogos

