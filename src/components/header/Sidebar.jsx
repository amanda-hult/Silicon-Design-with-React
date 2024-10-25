import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
        <li><Link href="#" onClick={() => hideSidebar()}>Sign in / up</Link></li>
        <li><Link href="#app-features" onClick={() => hideSidebar()}>Features</Link></li>
        <li><Link href="#faq-section" onClick={() => hideSidebar()}>FAQs</Link></li>
        <li><Link to="/contact" onClick={() => hideSidebar()}>Contact</Link></li>
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