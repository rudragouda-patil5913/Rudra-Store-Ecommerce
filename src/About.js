import React from 'react'
import HeroSection from './Components/HeroSection';

const About = () => {

  const data  = {
    name: "Rudra ecommerce",

  };
  return (
    <HeroSection myData={data} />
  )
}

export default About;