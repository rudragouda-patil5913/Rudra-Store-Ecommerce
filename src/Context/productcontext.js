import { createContext, useContext, useEffect,useReducer } from "react";
import axios from "axios";

import ProductReducer from "../Reducer/ProductReducer";


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const intialState ={
    isLoading: false,
    isError :false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

   const [state, dispatch] = useReducer(ProductReducer, intialState); 
  const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
  
      try {
        const res = await axios.get(url);
        const products = await res.data;
        dispatch({type: "SET_API_DATA", payload: products});           
      } catch (error) {
        dispatch({type: "API_ERROR"})
        
      }
    
  };

  //SINGLE PRODUCT API

  const getSingleProduct = async (url) =>{
    
    dispatch({type:"SET_SINGLE_LOADING"});
      try {
        const res = await axios (url);
        const singleProduct = await res.data;
         dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
           
      } catch (error) {
        dispatch({type: "SET_SINGLE_ERROR"});
      }
  }

  useEffect(() => {
    getProducts(API);
  },[]);

  return (
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };