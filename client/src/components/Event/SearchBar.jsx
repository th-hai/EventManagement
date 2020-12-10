import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
    return (
        <div className="flex w-3/5 justify-center">

        <div className="w-full h-16 rounded my-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg flex items-center"> 
        <input class="w-full h-full"  type="search" placeholder="Find event or somethings..."></input>
        <FontAwesomeIcon icon={faSearch} size="lg"/>
        </div>
           
        </div>
    )
}
export default SearchBar