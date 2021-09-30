import React from 'react'
import { Link } from 'react-router-dom'

const InfoBtn = () => {
    return (
        <div className="info-btn">
             <div className="info-btn-container">
                 <h1 className="interested">
                     Interested in 
                 </h1>
                <button onClick={}> 
                    <Link to='/contact-us'> Learn More </Link>
                </button>
            </div>
        </div>
    )
}

export default InfoBtn
