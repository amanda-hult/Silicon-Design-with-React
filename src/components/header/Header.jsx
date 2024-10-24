import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="main-navigation">

          <div className="logo-container">
            <a href="#" className="logo-link"><img className="logo-image" src="/public/silicon-logo.svg" alt="Silicon logo" /></a>
            <h1 className="s-heading">Silicon</h1>
            <a className="nav-link" href="#app-features">Features</a>
            <a className="nav-link">Contact</a>
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