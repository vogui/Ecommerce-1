import React from 'react'

export default ({product})=>{
    return(
      
        <div>
        { product ?
             <img src= {product.picture}>
          <h5>
            <span>Product:{product.title}</span>
          </h5>
          <h5>
            <span>Price:{product.price}</span>
          </h5> 
          </img> : <h5> Loading</h5>
}
          </div>
      
    )
    //vendrian las reviews
    }