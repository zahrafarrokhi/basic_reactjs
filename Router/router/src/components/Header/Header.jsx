import React from 'react'
import './Header.css'
import NavBar from '../NavBar/Navbar'
import { useLocation } from 'react-router-dom'


const Header = () => {
  let { pathname } = useLocation();
  let title = '';
 

  if (pathname === '/') title='Shop'
  if (pathname === "/about") title = "About";
  if (pathname === "/blog") title = "Blog";
  if (pathname === "/contact") title = "Contact";
  if (pathname.includes('product')) title = "Shop";

  return (
    <div className="Header">
      <div className="TopBar">
        <NavBar />
        <div className="Cart">
         
          
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Header