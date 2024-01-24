import React from "react";

function Search(props){
    let{setSearch} = props;
    return (
        <>
            <h1>Search Anything here...</h1>
            <input type="text" 
            placeholder="type anything here..."
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        
        </>
    )
}

export default Search;