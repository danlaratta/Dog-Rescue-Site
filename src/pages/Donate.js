
import React, { useState } from 'react'
import DonateForm from '../components/DonateForm'
import '../styles/Donate.css'

const Donate = () => {

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
        <div className="donate">
            <div className="donate-img">
                <h1 className="donate-heading">
                    It's About Making A <br/> Difference
                </h1>
            </div>

            <DonateForm />
        </div>
    )
}

export default Donate
