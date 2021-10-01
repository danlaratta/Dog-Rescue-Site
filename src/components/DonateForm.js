import React, { useState } from 'react'
import '../styles/Form.css'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [donation, setDonation] = useState()
    const [comment, setComment] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
    }

    return (
        <div className="donate-form">

            <form onSubmit={handleSubmit} className="form">
                <h1 className="form-header"> Donation Form </h1>

                <div className="fields">
                    <label className="label"> First Name </label>
                    <input
                        type="text"
                        className="input"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Last Name </label>
                    <input 
                        type="text"
                        className="input"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Email </label>
                    <input 
                        type="text"
                        className="input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Phone Number </label>
                    <input 
                        type="text"
                        className="input"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Donation </label>
                    <input 
                        type="text"
                        className="input"
                        required
                        value={donation}
                        onChange={(e) => setDonation(e.target.value)}
                    />
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

            <div className="thank-you-container">
                {submitted ? <p> {firstName} </p> : null}
                {submitted ? <p> {lastName} </p> : null}
                {submitted ? <p> {email} </p> : null}
                {submitted ? <p> {phone} </p> : null}
                {submitted ? <p> {donation} </p> : null}
                {submitted ? <p> {comment} </p> : null}

            </div>

        </div>
    )
}

export default Form
