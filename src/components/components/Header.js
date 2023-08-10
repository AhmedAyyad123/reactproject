import React from 'react'
import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <header>
//     <div className="logo0">
//        <Link to="/"><img src="../image/111.png" alt /></Link>
//     </div>
//     <nav className="menu0">
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/About">About</Link></li>
//             <li><Link to="/Servicespage">services</Link></li>
//             <li><Link to="/Latestnew">latest news</Link></li>
//             <li><Link to="/Acontact">contact US</Link></li>
//             <li><Link to="/Acontact">Support</Link></li>
//         </ul>
//     </nav>
// </header>
//   )
// }

function Header() {
    return (
        <header>
            <div className="logo0">
                <Link to="/">
                    <img src="../image/111.png" alt="Logo" />
                </Link>
            </div>
            <nav className="menu0">
                <ul id="menu-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Servicespage">Services</Link></li>
                    <li><Link to="/Latestnew">Latest News</Link></li>
                    <li><Link to="/Acontact">Contact Us</Link></li>
                    <li><Link to="/Acontact">Support</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header