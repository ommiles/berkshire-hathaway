import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
// import Logo from '../berkshire-hathawaylogo.png'
// import Logo from '../Berkshire-Hathaway-Logo.png'
import Logo from "../berkshire-hathaway-inc-logo-1.png";

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white'
// }

const NavBar = () => {
  // var prevScrollpos = window.pageYOffset;

  // window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //         document.getElementById('Navbar').style.top = '0';
  //     } else {
  //         document.getElementById('Navbar').style.top = '-200px';
  //     } prevScrollpos = currentScrollPos;
  // }

  return (
    <div id="Navbar" className="flex justify-between items-center center">
      <div>
        <a style={{ cursor: "pointer" }} href="/">
          <img src={Logo} alt="Berkshire Hathaway Logo" id="NavImage"></img>
        </a>
      </div>

      <div className="">
        {/* <NavLink className='pa3 link' to='/' exact >Home</NavLink> */}
        <NavLink className="pa3 link link:link" to="" exact>
          Holdings
        </NavLink>
        <NavLink className="pa3 link" to="/news" exact>
          News
        </NavLink>
        <NavLink className="pa3 link" to="/sustainability" exact>
          Sustainability
        </NavLink>
        {/* <NavLink className='pa3 link' to='/corporate-governance' exact >Corporate Governance</NavLink> */}
        <NavLink className="pa3 link" to="/investors" exact>
          Investors
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
