import { useCart } from "../CartContext";
import React from 'react'
import { API_URL } from "../Api";
import NavBar from "../Components/NavBar";
import { FaRegTrashAlt } from "react-icons/fa";
const CartPage = () => {
    const{cartItems,removeCartItems}=useCart();
    if(cartItems.length===0){
        return <section className="emptySection">
        <NavBar /><div className="emptyCart">
            Cart is Empty</div>
            </section>
    }
  return (
      <>
      <NavBar />
       <section className="cartItemsSection">
        <h3>My Cart Items</h3>
        <div className="headings">
            <p className="cartProductImg">Item</p>
            <p className="cartProductName">Item Name</p>
            <p className="cartItemPrice">Item Price</p>
            <p className="cartItemDesc">Item Description</p>
            <p>Remove</p>
        </div>
        <div className="myCartitems">
            {cartItems.map((item,index)=>{
                return(
                <div className="eachItem" key={item._id}>
                    <img src={`${API_URL}/uploads/${item.image}`}/>
                    <p className="cartProductName">{item.productName}</p>
                    <p className="cartItemPrice">₹{item.price}</p>
                    <p className="cartItemDesc">{item.description}</p>
                    <button onClick={()=>removeCartItems(index)} className="trashBtn"><FaRegTrashAlt /></button>
                </div>
                )
            })}
        </div>
        <div className="totalPrice">
            <span className="priceText">Total Price: ₹</span>
        {cartItems.reduce((total,item)=>{
            return total + Number(item.price)
        },0)}
        <span className="orderBtn"><button>Place Order</button></span>
        </div>
    </section>
      </>
  )
}
export default CartPage;
