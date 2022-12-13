import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount,stock, setDecrease, setIncrease }) => {
  return (
    
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button> 
        <br />
         
      </div> 
      <div className="cart-button"> {stock === amount ? <Messaage  stock={stock} /> :null}</div>
      </div> 
     
    

  );
};

const Messaage =({stock}) =>{
    return (
      <div className="stock-over">
        <p>
             Stock limit crossed. Availability of this stock is only {stock}.</p>
   </div> )
}

export default CartAmountToggle;