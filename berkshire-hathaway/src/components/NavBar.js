import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../images/berkshire-hathaway-inc-logo-1.png";

const NavBar = () => {

  return (
    <div id="Navbar" className="flex justify-between items-center center h4 ph4">
      <div className='pa3'>
        <a style={{  }} href="/" className=''>
          <img src={Logo} alt="Berkshire Hathaway Logo" id="NavImage"></img>
        </a>
      </div>

      <div className="">
        <NavLink className="pa3 link" to="/holdings" exact>
          Holdings
        </NavLink>
        <NavLink className="pa3 link" to="/news" exact>
          News
        </NavLink>
        <NavLink className="pa3 link" to="/sustainability" exact>
          Sustainability
        </NavLink>
        <NavLink className="pa3 link" to="/investors" exact>
          Investors
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
