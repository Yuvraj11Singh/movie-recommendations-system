import React from 'react'
// Fix the error
const Search = ({searchTerm, setSearchTerm}) => {

    // Here we have created a functional component called SearchBox which will help to search for movies 
    // It takes in two props: searchTerm and setSearchTerm
    return(
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input
                type = "text" 
                placeholder = "Search through thousands of movies"
                value = {searchTerm}
                onChange = {(event) => setSearchTerm(event.target.value)}
                
                />
            </div>
            
        </div>
    )
}
export default Search