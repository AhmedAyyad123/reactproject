import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="logo0">
       <Link to="/"><img src="../image/111.png" alt /></Link>
    </div>
    <nav className="menu0">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Servicespage">services</Link></li>
            <li><Link to="/Latestnew">latest news</Link></li>
            <li><Link to="/Latest">contact US</Link></li>
            <li><Link to="/Acontact">Support</Link></li>
        </ul>
    </nav>
</header>
  )
}

export default Header