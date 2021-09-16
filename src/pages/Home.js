import React from 'react'
import Button from '../components/Button'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="heading-container">
                    <div className="heading-item">
                        <h1 className="home-heading">
                            Searching For a New Best Friend?
                        </h1>

                        <h2 className="home-sub-heading">
                            Rescue One Today!
                        </h2>
                    </div>
                </div>

                <div className="home-btns-container">
                    <div className="btn-items">
                        <Link to='/adopt'>
                            <Button btnStyle='outline' btnSize='large'> ADOPT </Button>    
                        </Link> 
                    </div>

                    <div className="btn-items">
                        <Link to='/donate'>
                            <Button btnStyle='outline' btnSize='large'> DONATE </Button>
                        </Link> 
                    </div>
                </div>
            </div>

            <div className="mission-container">
                <h1 className="mission-header"> Our Mission </h1>
                
                <div className="mission-text">
                    <p>
                        Dog Rescue is a nonprofit organization focused on rescuing and transitioning displaced domestic dogs into their ideal forever homes as well as finding you your new best friend. Dog Rescue places heavy emphasis on quality veterinary care, nutrition, neuter programs, education, and compatible adoptions.
                    </p>
                </div>
            </div>

            <div className="links-container">
                <div className="links-item">
                    <Link to='/adopt' id="img-link">
                        <div className="link-img" id='detail1'>
                            <div className="link-details">
                                <h1 className="link-title">
                                    Adopt
                                </h1>
                                <h2 className="link-sub-title">
                                    See our dogs who are looking for their new home.
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="links-item">
                    <Link to='/volunteer' id="img-link">
                        <div className="link-img" id='detail2'>
                            <div className="link-details">
                                <h1 className="link-title">
                                    Volunteer
                                </h1>
                                <h2 className="link-sub-title">
                                    Help us with our mission of rescuing dogs in need. 
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="links-item">
                    <div className="link-img" id='detail3'>
                        <Link to='/donate' id="img-link">
                            <div className="link-details">
                                <h1 className="link-title">
                                    Donate
                                </h1>
                                <h2 className="link-sub-title">
                                    Every penny goes towards our mission of rescuing dogs.
                                </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
