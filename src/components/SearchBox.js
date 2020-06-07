import React from 'react';

const SearchBox =({searchChange}) =>{
    return (
        <div style={{paddingBottom:'8px'}}>
            <input className="pa3 ba bg-lightest-blue b--green" 
            type="search" 
            placeholder="Search robots"
            onChange={searchChange}
            ></input>
        </div>
    )
}
export default SearchBox;