import React from 'react';

function Nav(props) {
    return (
        <div className="nav">



    <div className="nasaImg" >
   <img src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" alt="nasaLogo" />
   </div>
            <button id="aboutButton">About</button>
                  
        <form className="searchBar">
            <input placeholder="Search" type="text" name="searchString" required />
            <button type="submit" className="search-button"> Search 
                </button> 
</form>


            
        </div>

    );
}

export default Nav;