import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
  switch (location.pathname) {
            case "/": handleClick(0)
                break
                case '/about': handleClick(28.5);
                break
                case '/products': handleClick(57);
                break
            case '/contact': handleClick(85.5);
                break
            default: handleClick(16)
        }
  return (
    <section className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="left-nav">
        SpyceKit
      </div>
      <div className="right-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
