import React, { useContext } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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