import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Axios from 'axios'
import SearchBar from '../components/SearchBar'

const Adopt = () => {

    const [dogs, setDogs] = useState([])
    const [searchedBreed, setSearchedBreed] = useState('hound')   

    const getData = async () => {

        const url = `https://dog.ceo/api/breed/${searchedBreed}/images` 

        const response = await Axios.get(url)
        
        // check if it received proper data then set the state to received value 
        if(response.data.message){
            setDogs(response.data.message)
        }
    }

    useEffect(() => {
        getData()
    }, [searchedBreed])
    
    return (
        <div className="adopt">
            <h1 className="adopt-title"> Dogs Available for Adoption </h1>
            
            <div className="searchbar-component">
                <SearchBar searchedBreed={searchedBreed} setSearchedBreed={setSearchedBreed} />
            </div>

            <div className="dogs-container">
                {dogs.slice(0, 16).map((dog) => (
                    <div className="dog-item" key={dog}>
                        <img src={dog} id="dog-img" alt="dog img" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adopt

