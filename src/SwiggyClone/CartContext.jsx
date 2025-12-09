import React,{createContext,useContext,useState} from 'react'
/*creatingContext*/
const CartContext=createContext();
/*custom hook*/
export function useCart(){
    return useContext(CartContext)
}
/*provider function*/
export const CartProvider=({children})=>{
    const[cartItems,setCartItems]=useState([]);
    /*addingItems to cart*/
    function addToCart(item){
        setCartItems((oldCart)=>
            [...oldCart,item]
        )
    }
    /*removing items from cart*/
    function removeCartItems(indexToRemove){
        setCartItems((oldCart)=>
            oldCart.filter((anything,index)=>index !==indexToRemove)
    )
}
return(
<CartContext.Provider value={{cartItems,addToCart,removeCartItems}}>
    {children}
</CartContext.Provider>
);
};