import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Axios from 'axios'
import SearchBar from '../components/SearchBar'

const Adopt = () => {

    const [dogs, setDogs] = useState([])
    const [searchedBreed, setSearchedBreed] = useState('hound')   

    const getData = async () => {

        // const url = `https://dog.ceo/api/breeds/list/all`
        const url = `https://dog.ceo/api/breed/${searchedBreed}/images` 
        // const url = 'https://dog.ceo/api/breed/hound/images'

        const response = await Axios.get(url)
        
        // check if it received proper data then set the state to received value 
        if(response.data.message){
            setDogs(response.data.message)
            console.log(response.data)
        }
    }

    useEffect(() => {
        getData()
    }, [searchedBreed])
    
    return (
        <div className="adopt">
            <div className="searchbar-component">
                <SearchBar searchedBreed={searchedBreed} setSearchedBreed={setSearchedBreed} />
            </div>

            <div className="dogs-container">
                {dogs.slice(0, 16).map((dog) => (
                    
                    <div className="dog-item">
                        <img src={dog} id="dog-img" alt="dog img" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adopt

