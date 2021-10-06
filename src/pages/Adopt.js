import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Axios from 'axios'
import SearchBar from '../components/SearchBar'

const Adopt = () => {

    const [dogs, setDogs] = useState([])
    const [searchedBreed, setSearchedBreed] = useState('hound')  
     

    const getDogData = async () => {
        const dogsUrl = `https://dog.ceo/api/breed/${searchedBreed}/images` 

        const responseDogs = await Axios.get(dogsUrl)
        
        const dogData = responseDogs.data.message
        
        // check if it received proper data then set the state to received value 
        if(dogData){
            setDogs(dogData)
        }
    }

    useEffect(() => {
        getDogData()
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
                        <div className="dog-info" style={{backgroundImage: `url(${dog})`}}>
                            {/* <DogDetails searchedBreed={searchedBreed} /> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adopt

