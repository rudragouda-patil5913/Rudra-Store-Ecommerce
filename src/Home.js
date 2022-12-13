import React from 'react'
import Services from "./Components/Services";
import Trusted from './Components/Trusted';
import HeroSection from './Components/HeroSection'
import FeatureProducts from './Components/FeatureProducts';


const Home = () => {

  const data  = {
    name: "Rudra store",

  };
  return (
    <>
      <HeroSection  myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
    
  )
}




export default Home;