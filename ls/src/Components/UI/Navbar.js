import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';
import logo2 from './logo2.svg'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/Home'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <Link to='/Products1'>
                  <img src={logo2} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/Home" className="nav-link">
                       The Lazy Shop
                    </Link>
                 </li>
               </ul>
            
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/Products" className="nav-link">
                       Products
                    </Link>
                 </li>
               </ul>
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/ContactUs" className="nav-link">
                      Contact Us
                    </Link>
                 </li>
               </ul>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
display:flex;
justify-content:space-between;
background-color:   rgba(49, 49, 54, 0.993);
.nav-link{
    color:white;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;