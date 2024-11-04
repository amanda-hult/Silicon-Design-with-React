import React, { useEffect, useState } from 'react'

function DarkModeToggle({ toggleImages }) {

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setdarkMode(true);
      document.body.classList.add('dark-theme');
      toggleImages(true);

      // const themeImageApple = document.querySelector('theme-image-apple');
      // const themeImageGoogle = document.querySelector('theme-image-google');
      // if (themeImageApple) {
      //   themeImageApple.src = '/appstore-dark.svg';
      // }
      // if (themeImageGoogle) {
      //   themeImageGoogle.src = '/googleplay-dark.svg';
      // }
    }
  }, [toggleImages]);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setdarkMode(newDarkMode);

    
    if(newDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }

    toggleImages(newDarkMode);
  }

  return (
    <div className="dark-mode">
      <span className="dark-mode-label bold" onClick={toggleDarkMode}>Dark Mode</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode}/>
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle


