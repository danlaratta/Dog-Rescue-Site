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
            <nav className="top-nav">
                <div className="top-nav-container">
                    <div className="top-nav-items">
                        <h1 className="top-nav-info"> info@dogrescue.org </h1>
                    </div>

                    <div className="top-nav-items">
                        <h1 className="top-nav-info"> (123) 546-7890 </h1>
                    </div>

                    <div className="top-nav-items">
                        <h1 className="top-nav-info"> 123 Dog Rescue Lane, New Jersey </h1>
                    </div>

                    <div className="top-nav-items">
                        <ul className="social-media-list">
                            <li> <i className="fab fa-facebook"></i> </li>
                            <li> <i className="fab fa-instagram"></i> </li>
                            <li> <i className="fab fa-twitter"></i> </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <nav className="navbar">
                <Link to='/' className="logo"> Dog Rescue </Link>

                <ul className={mobileNav ? 'nav-mobile' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={handleCloseMobileNav}> HOME </Link>
                    </li>

                    <li className="nav-items">
                        <Link to='/adopt' className="nav-links" onClick={handleCloseMobileNav}> ADOPT </Link>
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
