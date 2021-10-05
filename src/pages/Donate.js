
import React, { useState } from 'react'
import DonateForm from '../components/DonateForm'
import '../styles/Donate.css'

const Donate = () => {

    // state will be passed to child comp (DonateForm) and will be used to track when form is submitted 
    const [formSubmit, setFormSubmit] = useState(false)

    return (
        
        <div className="donate">
            <div className={formSubmit ? 'hide' : 'donate-img'}>
                <h1 className="donate-heading">
                    It's About Time for <br/> A Change
                </h1>
            </div>

            <div className="donate-form">
                <DonateForm isFormSubmit={ submitted => setFormSubmit(submitted)} />
            </div>
        </div>
    )
}

export default Donate










/*


import React, { useState } from 'react'
import DonateForm from '../components/DonateForm'
import DonationReceipt from '../components/DonationReceipt'
import '../styles/Donate.css'

const Donate = () => {

    

    return (
        <div className="donate">
            <div className="donate-img">
                <h1 className="donate-heading">
                    It's About Time for <br/> A Change
                </h1>
            </div>

            <div className={formSubmit ? 'hide' : 'donate-form'}>
                <DonateForm isFormSubmitted={submitted => setFormSubmit(submitted)} />
            </div>

            <div className={formSubmit ? 'donate-receipt' : 'hide'}>
                <DonationReceipt 
                    isFormSubmitted={submitted => setFormSubmit(submitted)} 
                    firstName={firstName} 
                    lastName={lastName} 
                    email={email} 
                    phone={phone} 
                    donation={donation} 
                    comment={comment} 
                />
            </div>


        </div>
    )
}

export default Donate

 */