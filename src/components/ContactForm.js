import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../styles/Form.css'

const ContactForm = ({ isFormSubmit }) => {

    const history = useHistory()
    
    // state for input fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // state tracks if field is required (and toggles requirement if required field(s) are hidden (no longer required)
    const [required, setRequired] = useState('required')

    // state tracks if Dontaion dropdown or Other inputfield are being displayed and required (if hidden its not required) 
    const [showDonation, setShowDonation] = useState(true)

    // state track when form is submitted
    const [submitted, setSubmitted] = useState(false)

    // function that handles what should happen when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)

        isFormSubmit(true)

        
        setTimeout(() => {
            history.push('/')
            window.scrollTo({top: 0, behavior: 'smooth'})
        }, 5000);
    }

    const capitalLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className={submitted ? 'hide' : 'form'}>
                <h1 className="form-header"> Contact Form </h1>

                <div className="fields">
                    <label className="label"> Name <span className="asterick"> * </span> </label>
                    <input
                        type="text"
                        className="input"
                        required={required}
                        value={capitalLetter(name)}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Email <span className="asterick"> * </span> </label>
                    <input 
                        type="text"
                        className="input"
                        required={required}
                        value={capitalLetter(email)}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="fields">
                    <label className="label">  Subject <span className="asterick"> * </span> </label>
                    <input
                        type="text"
                        className="input"
                        required={required}
                        value={capitalLetter(subject)}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Message <span className="asterick"> * </span> </label>
                    <textarea 
                        type="text"
                        className="textarea"
                        required={required}
                        value={capitalLetter(message)}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button className="submit"> Submit </button>
            </form>

            <div className={submitted ? 'confirmation' : 'hide'}>
                <div className="confirmation-heading">
                    <h1> {`Thank You ${capitalLetter(name)}`} </h1>

                    <p>
                        {`Your message has been sent, we will get back to you as soon as we can`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm







