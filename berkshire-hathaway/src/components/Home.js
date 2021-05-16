import React from 'react'
import { NavLink } from "react-router-dom";

import NavBar from './NavBar'
import Hero from '../images/68eba76008ec3558666815038d1e60eb.jpeg'
import './Home.css'

export default function Home() {

    return (
        <div className=''>

            <div className="hero-container relative">
                <img src={Hero} alt="Warren Buffet" className="w-100"></img>
                <div className="absolute top-1 bottom-1">
                    <div className="pt3 pl3 f3 ttu b">
                        <NavLink className="pa3 link white" to="/holdings" exact>
                        Holdings
                        </NavLink>
                        <NavLink className="pa3 link white" to="/news" exact>
                        News
                        </NavLink>
                        <NavLink className="pa3 link white" to="/sustainability" exact>
                        Sustainability
                        </NavLink>
                        <NavLink className="pa3 link white" to="/investors" exact>
                        Investors
                        </NavLink>
                    </div>
                    <div className="">
                        <h1 className="f-headline top-1 bottom-1 absolute mt6 mr5 mb5 ml4 white">Berkshire <br/> Hathaway Inc.</h1>
                    </div>
                </div>
            </div>
            
            <div id='HomeContainer'>
                <div className='mh5 f-subheadline'>
                    <h3 className="mh0 mv5 w-75">Do you know what could beat the exciting feling of having a new computer?  Make your own PC!</h3>
                </div>

                <div className="flex justify-between ma5" >
                    <div  className="flex flex-column ba w-20" >
                        <h4 className="b f2 lh-copy" >The most watched business event of the year</h4>
                        <p className="ttu f3 lh-copy" >Norway</p>
                    </div>
                    <div  className="flex flex-column ba w-20" >
                        <h4 className="b f2 lh-copy" >Resources</h4>
                        <p className="f3 lh-copy" >Do you know what could beat the ex flex-columnciting feling of having a new computer?  Make your own PC!</p>
                    </div>
                    <div  className="flex flex-column ba w-20" >
                        <h4 className="b f2 lh-copy" >Letters from Chairmen, Warren Buffet & Charlie Munger.</h4>
                        <button className="f3 lh-copy">Read Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
