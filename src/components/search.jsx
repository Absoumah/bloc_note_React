import React from 'react'


function Search ({setSearch}){
    
    return(
        <div className='search'>
            <form>
                <input type="text" placeholder='recherchez votre block note' onChange={(event)=>setSearch(event.target.value)}></input>
            </form>
        </div>
    )
}

export default Search