import React, { useState } from 'react'
import { itemsData } from '../data'

const ItemsDisplay = () => {
    const[itemsImage,setItemsImage]=useState(itemsData)
    console.log(itemsImage);
    
  return (
    <section className="itemsImgsSection">
        {itemsImage.map((item)=>{
            return(
                <div className="itemsGallery">
                    <img src={`${item.item_img}`} alt="itemsimages" />
                </div>
            )
        })}
    </section>

  )
}

export default ItemsDisplay