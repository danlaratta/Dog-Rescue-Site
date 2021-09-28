import React, { useState, useEffect } from 'react'
import '../styles/Adopt.css'
import Axios from 'axios'
import SearchBar from '../components/SearchBar'

const Adopt = () => {

    const [dogs, setDogs] = useState([])
    const [searchedBreed, setSearchedBreed] = useState('hound')  
    const [dogName, setDogName] = useState('') 

    const getData = async () => {

        const dogsUrl = `https://dog.ceo/api/breed/${searchedBreed}/images` 
        const namesUrl = 'https://randomuser.me/api/'

        const responseDogs = await Axios.get(dogsUrl)
        const responseNames = await Axios.get(namesUrl)
        
        // check if it received proper data then set the state to received value 
        if(responseDogs.data.message){
            setDogs(responseDogs.data.message)
        }

        const nameData = responseNames.data.results[0].name.first

        if(nameData){
            setDogName(nameData)
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

                        <div className="dog-info">
                            <h1 className="dog-name"> { dogName } </h1>
                            <h1 className="dog-age"> </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Adopt

