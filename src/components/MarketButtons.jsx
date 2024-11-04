import React, { useState } from 'react'

function MarketButtons({ marketButton }) {

  return (
    <div className="market-btns">
      {marketButton.map((button) => (
      <a key={button.id} className="btn-app" href={button.link} aria-label={button.ariaLabel} target='_blank'>
        <img id={`${button.alt === "AppStore button" ? "theme-image-apple" : "theme-image-google"}`} src={button.src} alt={button.alt} />
      </a>
      ))}
    </div>
  );
}

export default MarketButtons