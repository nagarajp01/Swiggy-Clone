import React from 'react'
import LandingPage from './SwiggyClone/Pages/LandingPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import ProductsPage from './SwiggyClone/Components/ProductsPage'
import CartPage from './SwiggyClone/Pages/CartPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/products/:firmId/:firmName' element={<ProductsPage />}/>
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
      
    </div>
  )
}

export default App
