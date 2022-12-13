import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';



const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src='./images/logo.png' alt="logo img"/>
        </NavLink>
        <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.section`
 padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`

export default Header