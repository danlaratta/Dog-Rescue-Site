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
