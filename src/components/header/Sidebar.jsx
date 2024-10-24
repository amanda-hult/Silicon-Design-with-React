import React, { useState } from 'react'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  }

  const hideSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
        <li className="ham-menu" onChange={() => hideSidebar()}>
        <label className="toggle-menu toggle-sidebar">
          <input type="checkbox" />
          <span className="line top-line"></span>
          <span className="line middle-line"></span>
          <span className="line bottom-line"></span>
        </label>
        </li>
        <li><a href="#" onClick={() => hideSidebar()}>Sign in / up</a></li>
        <li><a href="#app-features" onClick={() => hideSidebar()}>Features</a></li>
        <li><a href="#faq-section" onClick={() => hideSidebar()}>FAQs</a></li>
        <li><a href="#contact-info-section" onClick={() => hideSidebar()}>Contact</a></li>
      </ul>

      <label className="toggle-menu" onChange={() => showSidebar()}>
        <input type="checkbox" />
        <span className="line top-line"></span>
        <span className="line middle-line"></span>
        <span className="line bottom-line"></span>
      </label>
    </>
  )
}

export default Sidebar