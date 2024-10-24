import React, { useEffect, useState } from 'react'

function DarkModeToggle() {

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setdarkMode(true);
      document.body.classList.add('dark-theme');
      document.querySelector('#theme-image-apple').src = 'public/appstore-dark.svg';
      document.querySelector('#theme-image-google').src = 'public/googleplay-dark.svg';
    }
  }, []);
  
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
    
    if(!darkMode) {
      document.body.classList.add('dark-theme');
      document.querySelector('#theme-image-apple').src = 'public/appstore-dark.svg';
      document.querySelector('#theme-image-google').src = 'public/googleplay-dark.svg';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.querySelector('#theme-image-apple').src = 'public/appstore.svg';
      document.querySelector('#theme-image-google').src = 'public/googleplay.svg';
      localStorage.setItem('theme', 'light');
    }
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


