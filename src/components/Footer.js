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
                    <li> <i class="fas fa-map-marker-alt"></i> 123 Dog Rescue Lane, New Jersey </li>
                    <li> <i class="fas fa-mobile-alt"></i> (973) 123-546 </li>
                    <li> <i class="far fa-envelope"></i> info@dogrescue.org</li>
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
                    <li> <i class="fab fa-facebook"></i> </li>
                    <li> <i class="fab fa-instagram"></i> </li>
                    <li> <i class="fab fa-twitter"></i> </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
