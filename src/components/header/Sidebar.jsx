import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <li><Link to="/" onClick={() => { hideSidebar(); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Home</Link></li>
        <li><HashLink smooth to="/#app-features" onClick={() => hideSidebar()}>Features</HashLink></li>
        <li><HashLink smooth to="/#faq-section" onClick={() => hideSidebar()}>FAQs</HashLink></li>
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