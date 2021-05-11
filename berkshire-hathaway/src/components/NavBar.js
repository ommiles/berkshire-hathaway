import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'
// import Logo from '../berkshire-hathawaylogo.png'
// import Logo from '../Berkshire-Hathaway-Logo.png'
import Logo from '../berkshire-hathaway-inc-logo-1.png'

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white'
// }

const NavBar = () => {

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('Navbar').style.top = '0';
        } else {
            document.getElementById('Navbar').style.top = '-200px';
        } prevScrollpos = currentScrollPos;
    }
    
    return (

        <div id='Navbar'>

            <div>
                <img src={Logo} alt='Berkshire Hathaway Logo' id='NavImage' ></img>
            </div>

            <div id='NavItemsContainer'>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/about' exact >About
                        <div className='dropdown-content navbar'>
                            {/* <a href='/'>Link 1</a>
                            <a href='/'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/holdings' exact >Holdings
                        <div className='dropdown-content navbar'>
                            {/* <a href='#'>Link 1</a>
                            <a href='#'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/sustainability' exact >Sustainability
                        <div className='dropdown-content navbar'>
                            {/* <a href='#'>Link 1</a>
                            <a href='#'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/corporate-governance' exact >Corporate Governance
                        <div className='dropdown-content navbar'>
                            {/* <a href='#'>Link 1</a>
                            <a href='#'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/investors' exact >Investors
                        <div className='dropdown-content navbar'>
                            {/* <a href='#'>Link 1</a>
                            <a href='#'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
                <div id='NavItem'>
                    <NavLink className='dropdown' to='/news' exact >News
                        <div className='dropdown-content navbar'>
                            {/* <a href='#'>Link 1</a>
                            <a href='#'>Link 2</a> */}
                        </div>
                    </NavLink>
                </div>
            </div>
            
            {/* <NavLink to='/' exact >Home</NavLink> */}
            {/* <NavLink to='' exact >Holdings</NavLink> */}
            {/* <NavLink to='/sustainability' exact >Sustainability</NavLink> */}
            {/* <NavLink to='/corporate-governance' exact >Corporate Governance</NavLink> */}
            {/* <NavLink to='/investors' exact >Investors</NavLink> */}
            {/* <NavLink to='/news' exact >News</NavLink> */}
        </div>

    )
}

export default NavBar
