import React from 'react'



const Search = ({searchChange}) => {
    return(
        <div>
            <input type='text' 
            className ='pa3 ba2 bg-light-green b--dark-green'
            placeholder='search robofriends'
            onChange = {searchChange}/>
        </div>
    );
}

export default Search;