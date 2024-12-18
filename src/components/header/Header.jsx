import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const backgroundColor = location.pathname === '/' ? 'var(--bg-color-header)' : 'var(--bg-color-header-darkmode)';

  return (
    <>
      <header className="header" style={{backgroundColor}}>
        <nav className="main-navigation" style={{backgroundColor}}>
          <div className="logo-container">
            <Link to="/"><img src="/silicon-logo.svg" alt="Silicon logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/></Link>
            <Link to="/" className="home-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><h1 className="s-heading">Silicon</h1></Link>
            <NavLink className="nav-link" to="/">Features</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
          <DarkModeToggle />
          <Sidebar />
          <a id="sign-in-up" className="sign-in-btn" href="#">
            <i className="fa-thin fa-user"></i>
            <span>Sign in / up</span>
          </a>
        </nav>
      </header>
    </>
  )
}

export default Header