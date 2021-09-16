import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Button.css'

const Button = ({ children, btnStyle, btnSize }) => {

    const STYLES = ['solid', 'outline']

    const SIZES = ['small', 'medium', 'large']

    const PAGES = ['/adopt', '/donate']

    const checkStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]

    const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

    return (
        <>
            <button className={`btn ${checkStyle} ${checkSize}`}> { children } </button>

        </>
    )
}

export default Button
