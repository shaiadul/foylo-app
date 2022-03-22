import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
    
     <nav className='header'>
         {/* logo svg */}
         <img src={logo} alt="" />
         {/* link */}
         <div>
             <a href="/Shop">SHOP</a>
             <a href="/Orders">ORDERS</a>
             <a href="/Inventory">INVENTORY</a>
             <a href="/About">ABOUT</a>
         </div>
     </nav>
    
    );
};

export default Header;