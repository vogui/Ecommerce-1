import React from 'react'
import { Link } from 'react-router-dom'

export default ({products})=>{
    return(
        <div>
      <h3>Product List</h3>
     <div>
       { products && products.map(product => (
    <div key={product.id} >
      <Link  to={`/product/${product.id}`}>
        <img />
        <div>
          <h5>
            <span>{product.title}</span>
          </h5>
        <p><strong>{products.price}</strong></p>
        </div>
       </Link>
     </div>
     ))}
     </div>
    </div>
    )
}

//<button onClick = {()=> handleAdd}>Favorite</button>

