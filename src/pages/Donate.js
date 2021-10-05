
import React, { useState } from 'react'
import DonateForm from '../components/DonateForm'
import DonationReceipt from '../components/DonationReceipt'
import '../styles/Donate.css'

const Donate = () => {

    // state will be passed to child comp (DonateForm) and will be used to track when form is submitted
    const [formSubmit, setFormSubmit] = useState(false)

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
                <DonationReceipt isFormSubmitted={submitted => setFormSubmit(submitted)} />
            </div>
        </div>
    )
}

export default Donate
