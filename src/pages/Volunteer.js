import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Volunteer.css'

const Volunteer = () => {
    return (
        <div className="volunteer">
            <div className="volunteer-img">
                <h1 className="volunteer-heading">
                    Join Our Pawsome <br/> Rescue Team!
                </h1>
            </div>

            <div className="volunteer-intro">
                <h1 className="volunteer-title">
                    Volunteers are Appreciated!
                </h1>

                <p className="volunteer-intro-text">
                    Are you interested in volunteering, there are plenty of dogs who can benefit from your support. Your involvement is the key to our ongoing success. You can aid in fulfilling Dog Rescue’s mission of saving homeless and abandoned dogs in New Jersey by finding their forever homes. <br/> ** You can apply by filling out <Link to='/volunteer-application' className="volunteer-link"> volunteer </Link> and <Link to='/foster-application' className="volunteer-link"> foster </Link> applications or stop by the shelter to pick them up. **     
                </p>
            </div>

            <div className="volunteering">
                <h1 className="volunteer-title">
                    How You Can Help!
                </h1>

                <div className="volunteering-container">
                    <div className="volunteering-items">
                        <i class="fas fa-paw" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Dog Grooming </h1>
                    </div>

                    <div className="volunteering-items">
                        <i class="fas fa-home" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Fostering </h1>
                    </div>
                    
                    <div className="volunteering-items">
                        <i class="far fa-calendar-alt" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Event Cordinating </h1>
                    </div>

                    <div className="volunteering-items">
                        <i class="fas fa-shuttle-van" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Transportation </h1>
                    </div>

                    <div className="volunteering-items">
                        <i class="fas fa-dog" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Dog Handling </h1>
                    </div>

                    <div className="volunteering-items">
                        <i class="fas fa-hand-holding-usd" id="volunteer-icons"/>
                        <h1 className="volunteer-item-title"> Fundraising </h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Volunteer
