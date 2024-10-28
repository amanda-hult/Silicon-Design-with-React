import React, { useState } from 'react'

function DirectionCard() {

  const [direction, setDirection] = useState([
    {
      id: 1,
      headline: 'Medical Center 1',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      mapLink: 'https://maps.app.goo.gl/pzfcHJZ788dzerK38',
      phone: '(406) 555-0120'
    },
    {
      id: 2,
      headline: 'Medical Center 2',
      address: '2464 Royal Ln. Mesa,New Jersey 45463',
      mapLink: 'https://maps.app.goo.gl/XYDTydU6mDDjVnSE7',
      phone: '(406) 544-0123'
    },

  ]);

  return (   
    <>
      {direction.map((direction) => (
        <div className="space-y-1" key={direction.id}>
          <h2>{direction.headline}</h2>
          <p><span><i className='fa-sharp fa-regular fa-location-dot accent space-right'></i></span>{direction.address}<span><a href={direction.mapLink} target='_blank' className='map-link s-font'>Show on map </a></span></p>
          <p><span><i className="fa-sharp fa-regular fa-phone-volume accent space-right"></i></span> {direction.phone}</p>
          <p><span><i className="fa-regular fa-clock accent space-right"></i></span><span className="bold"> Mon – Fri:</span>9:00 am – 22:00 am<br /><span className="bold space-left">Sat – Sun:</span> 9:00 am – 20:00 am</p>
        </div>
      ))}
    </>
  );
}

export default DirectionCard