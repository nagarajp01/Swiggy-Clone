import React from 'react'
import NavBar from '../Components/NavBar'
import ItemsDisplay from '../Components/ItemsDisplay'
import FoodChains from '../Components/FoodChains'
import FirmCollections from '../Components/FirmCollections'
import ProductsPage from '../Components/ProductsPage'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <div className="middleSection">
            <ItemsDisplay />
            <FoodChains />
            <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage