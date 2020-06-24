import React from 'react'

export default ({valueSearch, handleChange})=>{

return(
    <div id="Movie">
    <form onSubmit={handleSubmit}>
    
     <input type="text" value={valueSearch} placeholder="Search Products" onChange={handleChange}/>
    
    </form>
    </div>
    )
    }