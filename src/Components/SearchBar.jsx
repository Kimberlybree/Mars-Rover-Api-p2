import React from 'react';
import App from '../App';


function SearchBar () {
    return (
   
        <form className="form-horizontal">
            <input placeholder="Search" type="text" name="searchString" required />
            <button type="submit" className="search-button"> Search
                </button> 

        </form>
       

    
    );
}

export default SearchBar;