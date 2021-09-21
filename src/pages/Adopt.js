import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Creatable from 'react-select/creatable'
import Axios from 'axios'

const Adopt = () => {

    const [dog, setDog] = useState('')
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        Axios.get('https://dog.ceo/api/breeds/list/all').then((res) => {
            console.log(res.data.message.beagle)
        })
    }, [count])
    
    return (
        <>
            <button onClick={handleCount}> Click me </button>
        </>
    )
}

export default Adopt
