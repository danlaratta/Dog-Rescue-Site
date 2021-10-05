import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
// import '../styles/Contact.css'

const Contact = () => {

    const [formSubmit, setFormSubmit] = useState(false)


    return (
        <div className="contact">
            <div className="contact-form">
                <ContactForm isFormSubmit={submitted => setFormSubmit(submitted)} />
            </div>
        </div>
    )
}

export default Contact
