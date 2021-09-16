import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/DonateBtn.css'

const DonateBtn = ({ children, btnStyle, btnSize, page  }) => {

    const STYLES = ['solid', 'outline']

    const SIZES = ['small', 'medium', 'large']

    const PAGES = ['/adopt', '/donate']

    const checkStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]

    const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

    return (
        <>
            <Link to={page}>
                <button className={`btn ${checkStyle} ${checkSize}`}> { children } </button>
            </Link>
        </>
    )
}

export default DonateBtn
