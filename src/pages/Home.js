import React from 'react'
import DonateBtn from '../components/DonateBtn'
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <h1 className="home-heading">
                    Searching For a New Best Friend?
                </h1>

                <h2 className="home-sub-heading">
                    Look No Further
                </h2>
                <div className="home-btns-container">
                    <div className="btn-items">
                        <DonateBtn btnStyle='outline' btnSize='large'> ADOPT </DonateBtn> 
                    </div>

                    <div className="btn-items">
                        <DonateBtn btnStyle='outline' btnSize='large'> DONATE </DonateBtn> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
