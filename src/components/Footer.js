import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-item">
                <h1 className="footer-header">
                    Contact Infortmation
                </h1>

                <ul className="contact-info" id="column1">
                    <li> <i className="fas fa-map-marker-alt"></i> 123 Dog Rescue Lane, New Jersey </li>
                    <li> <i className="fas fa-mobile-alt"></i> (973) 123-546 </li>
                    <li> <i className="far fa-envelope"></i> info@dogrescue.org</li>
                </ul>
            </div>

            <div className="footer-item">
                <h1 className="footer-header">
                    More Infortmation
                </h1>

                <ul className="contact-info" id="column2">
                    <li>
                        <Link to='/' id="contact-link"> HOME </Link>
                    </li>

                    <li>
                        <Link to='/adopt' id="contact-link"> ADOPT </Link>
                    </li>

                    <li>
                        <Link to='/volunteer' id="contact-link"> VOLUNTEER </Link>
                    </li>

                    <li>
                        <Link to='/donate' id="contact-link"> DONATE </Link>
                    </li>

                    <li>
                        <Link to='/contact-us' id="contact-link"> CONTACT US </Link>
                    </li>
                </ul>
            </div>

            <div className="footer-item">
                <h1 className="footer-header">
                    Social Media
                </h1>

                <ul className="contact-info" id="column3">
                    <li> <i className="fab fa-facebook"></i> </li>
                    <li> <i className="fab fa-instagram"></i> </li>
                    <li> <i className="fab fa-twitter"></i> </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
