import React, { useContext } from 'react'
import { DarkModeContext } from './contexts/DarkModeContext';

function MarketButtons() {
  const { darkMode } = useContext(DarkModeContext);

  const marketButton = [
    {
      id: 1,
      src: darkMode ? "/appstore-dark.svg" : '/appstore.svg',
      alt: "AppStore button",
      ariaLabel: "App-Store",
      link: "https://www.apple.com/se/app-store/"
    },
    {
      id: 2,
      src: darkMode ? '/googleplay-dark.svg' : "/googleplay.svg",
      alt: "GooglePlay button",
      ariaLabel: "Google-Play",
      link: "https://play.google.com/"
    },
  ];

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