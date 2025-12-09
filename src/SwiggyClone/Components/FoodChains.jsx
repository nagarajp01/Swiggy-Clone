import React, { useState,useEffect } from 'react'
import { API_URL } from '../Api'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
const FoodChains = () => {
    const[vendorsData,setVendorsData]=useState([])
    const[scrollPosition,setScrollPosition]=useState(0)
    const[loading,setLoading]=useState(true)
    const ApiDataHandler=async ()=>{
        try {
        const response=await fetch(`${API_URL}/vendor/all-vendors`)
        const newApiData=await response.json()
        setVendorsData(newApiData)
        setLoading(false)
            
        } catch (error) {
            alert("data fetch error")
            console.log("api fetching error",error); 
            setLoading(true)  
        }
    }
    useEffect(()=>{
        ApiDataHandler()
    },[])
    const scrollHandler=(direction)=>{
        const galleryChain=document.getElementById("foodChainGallery");
        const scrollAmount=500;
        if(direction ==="left"){
            galleryChain.scrollTo({
                left: galleryChain.scrollLeft-scrollAmount,
                behavior:"smooth"
                })
        }else if(direction === "right"){
            galleryChain.scrollTo({
                left:galleryChain.scrollLeft+scrollAmount,
                behavior:"smooth"
            })

        }

    }
  return (
  <div className='foodMediaChainSection'>
<div className="loaderSection">
      {loading && <>
  <div className="loader">
    🍽😋Finding restaurants near you…</div>
    <RotatingLines
visible={true}
height="96"
width="96"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>
</>}
</div>
  <div className="btnSection">
    <button className='btns' onClick={()=>{scrollHandler("left")}}><FaRegArrowAltCircleLeft /></button>
    <button className='btns' onClick={()=>{scrollHandler("right")}}><FaRegArrowAltCircleRight /></button>
  </div>
  <h3>Best Restaurants in Hyderabad</h3>
   <section className="foodChainSection" id='foodChainGallery' onScroll={(e)=>{setScrollPosition(e.target.scrollLeft)}}>
    {vendorsData.vendors && vendorsData.vendors.map((vendor)=>{
        return(
            <div className="vendorsGroup">
                {vendor.firm.map((item)=>{
                    return(
                        <>
                        <div className="FirmName">
                            {item.firmName}
                            </div>
                            <div className="firmImages" >
                                <img src={`${API_URL}/uploads/${item.image}`} alt="FirmImages" />
                            </div>
                        </>
                    )

                })}
            </div>
        )
    })}
   </section>
  </div>
    
  )
}

export default FoodChains