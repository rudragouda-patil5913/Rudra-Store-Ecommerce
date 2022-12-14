
import { createContext , useReducer, useContext, useEffect} from "react"
import reducer from "../Reducer/cartReducer";


const CartContext = createContext();

const getLocalCartData = () =>{
  let localCartData = localStorage.getItem("rudraCart");
  if(localCartData === []){
    return [];
  }else{
    return JSON.parse(localCartData);
  }
}

const CartProvider =({children})=>{

    const initialState = {
        cart: getLocalCartData(),
        total_items:"",
        total_amount:"",
        shipping_fee: 50000,
    }

//to add particular item from cart
  const  addToCart = (id, color, amount, product) => {
    dispatch({type: "ADD_TO_CART",payload: { id, color, amount, product }})
  }

// increment and decrement 

const setDecrease = (id) =>{
  dispatch({type:"SET_DECREMENT", payload: id});
}
const setIncrease = (id) =>{
  dispatch({type:"SET_INCREMENT" , payload: id}); 
}


//to remove particular item from cart
  const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM", payload: id})
  }

  //to cleae entire cart
  const clearCart =()=>{
    dispatch({type: "CLEAR_CART"});
  }

 const [state, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
  dispatch({type:"CART_ITEM_PRICE_TOTAL"});
  localStorage.setItem("rudraCart", JSON.stringify(state.cart));
 
 }, [state.cart])
 

    return (
    <CartContext.Provider value={{...state , addToCart, removeItem, clearCart, setDecrease, setIncrease,}} >
        {children}
    </CartContext.Provider>
    )
};
 const useCartContext =()=>{
    return useContext(CartContext)
 }

export { CartProvider, useCartContext };
