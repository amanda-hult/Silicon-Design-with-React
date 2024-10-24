import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="main-navigation">

          <div className="logo-container">
            <Link to="/" className="logo-link"><img className="logo-image" src="/silicon-logo.svg" alt="Silicon logo" /></Link>
            <h1 className="s-heading">Silicon</h1>
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