import React, { useState } from 'react'
import '../styles/Form.css'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import DonationReceipt from './DonationReceipt'

const Form = ({ isFormSubmitted }) => {
    // state for input fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [donation, setDonation] = useState('')
    const [otherDonation, setOtherDonation] = useState('')
    const [comment, setComment] = useState('')
    // state tracks if field is required (and toggles requirement if required field(s) are hidden (no longer required)
    const [required, setRequired] = useState('required')
    // state tracks if Dontaion dropdown or Other inputfield are being displayed and required (if hidden its not required) 
    const [showDonation, setShowDonation] = useState(true)
    const [showOtherInput, setShowOtherInput] = useState(false)
    // state tracks whether the info submitted to form is displayed or not (will be displayed after submit)
    const [showSubmitData, setShowSubmitData] = useState('')
    // state track when form is submitted
    const [submitted, setSubmitted] = useState(false)

    // function that handles what should happen when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)

        isFormSubmitted(true)

        

        console.log('submitted')
    }

    return (
        <div className="donate-form">

            <form onSubmit={handleSubmit} className={submitted ? 'hide' : 'form'}>
                <h1 className="form-header"> Donation Form </h1>

                <div className="fields">
                    <label className="label"> First Name <span className="asterick"> * </span> </label>
                    <input
                        type="text"
                        className="input"
                        required={required}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Last Name <span className="asterick"> * </span> </label>
                    <input 
                        type="text"
                        className="input"
                        required={required}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Email <span className="asterick"> * </span> </label>
                    <input 
                        type="text"
                        className="input"
                        required={required}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Phone Number <span className="asterick"> * </span> </label>
                    <Input
                        country="US"
                        className="input"
                        required={required}
                        value={phone}
                        onChange={setPhone}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Donation <span className="asterick"> * </span> </label>
                    <select
                        required={required}
                        value={donation}
                        className={showDonation ? 'select' : 'hide'}
                        placeholder=""
                        onChange={(e) => 
                            setDonation (e.target.value)
                            
                        }
                    >
                        <option> $0.00 </option>
                        <option> $10.00 </option>
                        <option> $25.00 </option>
                        <option> $50.00 </option>
                        <option> $100.00 </option>
                    </select>
                </div>

                <div className="fields">
                    <label className="label"> Comment </label>
                    <textarea 
                        type="text"
                        className="textarea"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                <button className="submit"> Submit </button>
            </form>

            <div className={submitted ? 'display-data' : 'hide'}>
                {submitted ? <p> {firstName} </p> : null}
                {submitted ? <p> {lastName} </p> : null}
                {submitted ? <p> {email} </p> : null}
                {submitted ? <p> {phone} </p> : null}
                {submitted && showDonation  ? <p> {donation} </p> : null}
                {submitted && showOtherInput  ? <p> {otherDonation} </p> : null}
                {submitted ? <p> {comment} </p> : null}

            </div>

            <DonationReceipt
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                phone={phone} 
                donation={donation} 
                comment={comment} />

        </div>
    )
}

export default Form
