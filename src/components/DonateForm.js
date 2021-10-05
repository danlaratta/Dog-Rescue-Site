import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../styles/Form.css'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'

const Form = ({ isFormSubmit }) => {

    const history = useHistory()
    
    // state for input fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [donation, setDonation] = useState('')
    const [comment, setComment] = useState('')

    // state tracks if field is required (and toggles requirement if required field(s) are hidden (no longer required)
    const [required, setRequired] = useState('required')

    // state tracks if Dontaion dropdown or Other inputfield are being displayed and required (if hidden its not required) 
    const [showDonation, setShowDonation] = useState(true)

    // state tracks whether the info submitted to form is displayed or not (will be displayed after submit)
    const [showSubmitData, setShowSubmitData] = useState('')

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
        }, 3000);
    }

    const capitalLetter = (input) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
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
                        value={capitalLetter(firstName)}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="fields">
                    <label className="label"> Last Name <span className="asterick"> * </span> </label>
                    <input 
                        type="text"
                        className="input"
                        required={required}
                        value={capitalLetter(lastName)}
                        onChange={(e) => setLastName(e.target.value)}
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
                        onChange={(e) => setDonation (e.target.value)}
                    >
                        <option> $0.00 </option>
                        <option> $5.00 </option>
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

            <div className={submitted ? 'confirmation' : 'hide'}>
                <div className="confirmation-heading">
                    <h1> {`Thank You ${capitalLetter(firstName)} ${capitalLetter(lastName)}!`} </h1>

                    <p>
                        {`Your ${donation} donation was processed and greatly appreciated! A receipt has been sent to ${capitalLetter(email)} and should arrive shortly`}
                    </p>
                </div>

                {/* <table>
                    <tr>
                        <td> <strong> Receipt </strong> </td>
                    </tr>
                    
                    <tr>
                        <td> <strong> First Name </strong> </td>
                        <td> {firstName}  </td>
                    </tr>

                    <tr>
                        <td> <strong> Last Name </strong> </td>
                        <td> {lastName}  </td>
                    </tr>

                    <tr>
                        <td> <strong> Email </strong> </td>
                        <td> {email}  </td>
                    </tr>

                    <tr>
                        <td> <strong> Phone Number </strong> </td>
                        <td> {phone}  </td>
                    </tr>

                    <tr>
                        <td> <strong> First Name </strong> </td>
                        <td> {firstName}  </td>
                    </tr>

                    <tr>
                        <td> <strong> Donation </strong> </td>
                        <td> {donation}  </td>
                    </tr>

                    <tr>
                        <td> <strong> Comment </strong> </td>
                        <td> {comment}  </td>
                    </tr>
                </table> */}
            </div>
        </div>
    )
}

export default Form







