import React from 'react'
import { Link } from 'react-router-dom'

export default ()=>{
    return(
        <div>
      <h3>Product List</h3>
     <div>
       { peliculas && peliculas.map(pelicula => (
    <div key={pelicula.imdbID} >
      <Link  to={``}>
        <img />
        <div>
          <h5>
            <span>{pelicula.Title}</span>
          </h5>
          <small>{pelicula.Year}</small>
        </div>
       </Link>
     </div>
     ))}
     </div>
    </div>
    )
}

//<button onClick = {()=> handleAdd}>Favorite</button>