import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false)

    const handleMobileIconClick = () => {
        setMobileNav(!mobileNav)
    }

    const handleCloseMobileNav = () => {
        setMobileNav(false)
    }

    return (
        <>
            <div className="info-bar">
                <div className="info-bar-items">
                    <h1 className="info-text">
                        <i className="fas fa-mobile-alt"></i> (973) 123-456 
                    </h1>
                </div>

                <div className="info-bar-items">
                    <h1 className="info-text">
                        <i className="fas fa-map-marker-alt"></i>  123 DOG RESCUE LANE, TOMS RIVER, NJ 08753 
                    </h1>
                </div>

                <div className="info-bar-items">
                    <ul className="social-media-icons">
                        <li className="icon"> <i class="fab fa-facebook"></i> </li>
                        <li className="icon"> <i class="fab fa-instagram"></i> </li>
                        <li className="icon"> <i class="fab fa-twitter"></i> </li>
                    </ul>
                </div>
            </div>

            <nav className="navbar">
                <Link to='/' className="logo"> Dog Rescue </Link>

                <ul className={mobileNav ? 'nav-mobile' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={handleCloseMobileNav}> HOME </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/about-us' className="nav-links" onClick={handleCloseMobileNav}> ABOUT US </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/adopt' className="nav-links" onClick={handleCloseMobileNav}> ADOPT </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/events' className="nav-links" onClick={handleCloseMobileNav}> EVENTS </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/volunteer' className="nav-links" onClick={handleCloseMobileNav}> VOLUNTEER </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/donate' className="nav-links" onClick={handleCloseMobileNav}> DONATE </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/contact-us' className="nav-links" onClick={handleCloseMobileNav}> CONTACT US </Link>
                    </li>
                </ul>

                <div className="mobile-icon" onClick={handleMobileIconClick}>
                    <i className={mobileNav ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
