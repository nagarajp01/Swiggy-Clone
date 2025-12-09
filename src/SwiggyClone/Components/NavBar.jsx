import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import { IoFastFoodOutline } from "react-icons/io5";
const NavBar = () => {
  const{cartItems}=useCart()
  return (
    <section className="navBarSection">
      <Link to="/" className='link'>
        <div className="companyName">
            <h2>SWIGGY</h2>
        </div>
      </Link>
        <div className="inputDiv">
          <span className="searchIcon">🔍</span>
            <input type="text" placeholder='Search for restaurants or dishes...' />
        </div>
        <div className="login">
            Login / SignUp
        </div>
        <Link to="/cart" className='cartIcon link'>
        <IoFastFoodOutline  className='IconCart'/>Cart 
        <span className='cartCount'>{cartItems?.length || 0}</span>
        </Link>
    </section>
  )
}

export default NavBar