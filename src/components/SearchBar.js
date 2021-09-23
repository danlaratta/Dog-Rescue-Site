import React, { useState } from 'react'
import '../styles/SearchBar.css'

const SearchBar = ({ searchedBreed, setSearchedBreed }) => {

    const [submitted, setSubmitted] = useState(false)

    const inputValue = searchedBreed

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)
    }
    
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='search'
                    onChange={(e) => setSearchedBreed(e.target.value)}
                    value={submitted ? inputValue : ''}
                    placeholder='Search Breed'
                />
                <button className="search-icon"> <i class="fas fa-search"></i> </button>
            </form>
        </div>
    )
}

export default SearchBar
