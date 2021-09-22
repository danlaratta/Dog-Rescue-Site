import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Creatable from 'react-select/creatable'
import Axios from 'axios'

const Adopt = () => {

    const [dogs, setDogs] = useState('')


    useEffect(() => {
        retrieveAPI()
    }, [])

    const retrieveAPI = () => {
        Axios.get('https://dog.ceo/api/breeds/list/all').then((res) => {
            if(res.data.messgae){
                setDogs(res.data.message)
            }
        }).catch((error) => {
            console.log(`An Error Occurred: ${error}`)
        })
    }
    
    return (
        <>
            
        </>
    )
}

export default Adopt
