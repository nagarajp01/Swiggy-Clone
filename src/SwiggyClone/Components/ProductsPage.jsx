import React,{useState,useEffect}from 'react'
import { API_URL } from '../Api'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { useCart } from '../CartContext'
const ProductsPage = () => {
    const[foodProducts,setFoodProducts]=useState([])
    const{firmId,firmName}=useParams()
    const{addToCart}=useCart();
    
    const productsHandler=async ()=>{
        try {
            const response=await fetch(`${API_URL}/product/${firmId}/products`);
            const newProductData=await response.json();
            setFoodProducts(newProductData.products)
            
        } catch (error) {
            alert("product data fetch error")
            console.log("error while fetching products",error);
        }
    }
    useEffect(()=>{
        productsHandler()
    },[])
  return (
   <>
   <NavBar />
    <section className="productSection">
        <h3 className='productFirmName'>{firmName}</h3>
        {foodProducts.map((item)=>{
            return(
                <div className='foodItemsSection' key={item._id}>
                <div>
                    <div className='productName'>{item.productName}</div>
                    <div className='productDetails'>₹{item.price}</div>
                    <div className='productDetails'>{item.description}</div>
                </div>
                  <div className="foodImgs">
                    <img src={`${API_URL}/uploads/${item.image}`} alt="FoodImages"/>
                    <div className="addBtn">
                         <button className='addBtn' onClick={()=>addToCart(item)}>ADD</button>
                    </div>
                    </div>
                </div>
            )

        })}
    </section>
   </>
  )
}

export default ProductsPage