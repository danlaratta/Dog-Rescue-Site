import React, { useState } from 'react'
import Select from 'react-select';
import '../styles/SearchBar.css'


const SearchBar = ({ searchedBreed, setSearchedBreed }) => {

    const dogBreeds = [
        'beagle', 'boxer', 'bulldog',
        'chihuahua', 'dachshund', 'dalmatian',
        'germanshepherd', 'hound', 'husky',
        'labradoodle', 'labrador', 'pitbull',
        'poodle', 'pug', 'retriever',
        'rottweiler', 'shihtzu', 'terrier', 
    ]

    const customStyles = {
        option: (styles, state) => ({
          ...styles,
          cursor: 'pointer',
        }),
        control: (styles) => ({
          ...styles,
          cursor: 'pointer',
        }),
    }  
      
    return (
        <div className="search-bar">
           <Select 
                className='search'
                placeholder= 'Search Breed...'
                options={dogBreeds.map(opt => ({ label: opt.charAt(0).toUpperCase() + opt.slice(1), value: opt }))}
                onChange={opt => setSearchedBreed(opt.value)}
                styles={customStyles}
            />
            
        </div>
    )
}

export default SearchBar


/*
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Select from 'react-select';
import '../styles/SearchBar.css'


const SearchBar = ({ searchedBreed, setSearchedBreed }) => {

    const [dogList, setDogList] = useState([])

    

    useEffect(() => {
        const getDogList = async () => {
            const url = 'https://dog.ceo/api/breeds/list/all'
    
            const response = await Axios.get(url)
            const data = response.data.message[0]

            console.log(data)
            
            if(data){
                setDogList(data.map(({ breed }) => ({ label: breed, value: breed })));
            }
            
        }

        getDogList()
    }, [])

    return (
        <div className="search-bar">
            <select
                value={searchedBreed}
                onChange={(e) => setSearchedBreed(e.currentTarget.value)}
            >

                {dogList.map(({ label, searchedBreed }) => (
                    <option key={searchedBreed} searchedBreed={searchedBreed}>
                    {label}
                    </option>
                ))}
             </select>
            
        </div>
    )
}

export default SearchBar
*/




/*
    import '../styles/SearchBar.css'

const SearchBar = ({ searchedBreed, setSearchedBreed }) => {

    return (
        <div className="search-bar">
                <input 
                    type='text'
                    id='search'
                    onChange={(e) => setSearchedBreed(e.target.value)}
                    value= {searchedBreed}
                    placeholder='Search Breed'
                />
                <button className="search-icon"> <i className="fas fa-search"></i> </button>
        </div>
    )
}

export default SearchBar

*/
