import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation()
  const handleClick = (left) => {
    document.querySelector(':root').style.setProperty('--left', `${left}%`)
  }
  if (window.outerWidth <= 900) {
    switch (location.pathname) {
      case "/": handleClick(0)
        break
      case '/about': handleClick(27.5);
        break
      case '/products': handleClick(55);
        break
      case '/contact': handleClick(82.5);
        break
      default: handleClick(0)
    }
  }
  else {
    switch (location.pathname) {
      case "/": handleClick(0)
        break
      case '/about': handleClick(28.5);
        break
      case '/products': handleClick(57);
        break
      case '/contact': handleClick(85.5);
        break
      default: handleClick(0)
    }
  }
  return (
    <section className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="left-nav">
        <img src="/assets/images/logo-removebg-preview.png" alt="" />
      </div>
      <div className="right-nav">
        <ul>
          <li><NavLink className={({isActive})=>isActive?"active":""} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive})=>isActive?"active":""} to="/about">About</NavLink></li>
          <li><NavLink className={({isActive})=>isActive?"active":""} to="/products">Products</NavLink></li>
          <li><NavLink className={({isActive})=>isActive?"active":""} to="/contact">Contact</NavLink></li>
        </ul>
        <div onClick={() => setShowHamMenu(true)} className="hamButton" >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`hamMenu ${showHamMenu ? "open" : "close"}`}>
        <button onClick={() => setShowHamMenu(false)}>&times;</button>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setShowHamMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setShowHamMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setShowHamMenu(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setShowHamMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
