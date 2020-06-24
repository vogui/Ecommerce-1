import React from 'react'
import { Switch, Router } from 'react-router-dom'
import ProductsConteiner from '../conteiners/ProductsConteiner'

export default ()=>{
    return(
      <Switch>
          <Router path='/product' component={ProductsConteiner} />
          <Router path='/product/:id' component={ProductsConteiner} />
      </Switch>
    )

}