import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../styles/DogDetails.css'


const DogDetails = ( {searchedBreed}) => {

    const [names, setNames] = useState([])

    const getNameData = async () => {
        const namesUrl = 'https://randommer.io/api/Name?nameType=firstname&quantity=16'

        const responseNames = await Axios.get(namesUrl, {
            headers: {
                'X-Api-Key' : 'ab0dbf49988940f5862e49a100f1bd77'
            }
        })

        const nameData = responseNames.data

            setNames(nameData)
            console.log(nameData)

    }

    useEffect(() => {
        getNameData()
    }, [searchedBreed])
    
    return (
        <div className="dog-container">
            {names.map((name, id) => (
                <div className="dog-details">
                    <h1 className="dog-text" > { name } </h1>
                    <h1 className="dog-text"> </h1> 
                </div>
            ))}
        </div>
    )
}

export default DogDetails
