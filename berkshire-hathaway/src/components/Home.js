import React from 'react'
import { NavLink } from "react-router-dom";

import Hero from '../images/68eba76008ec3558666815038d1e60eb.jpeg'
import HomeNews from './HomeNews.js'
import HomeContent from './HomeContent.js'

export default function Home() {

    return (
        <div className=''>

            <div className="hero-container relative">
                <img src={Hero} alt="Warren Buffet" className="w-100"></img>
                <div className="absolute top-1 bottom-1">
                    <div className="pt3 pl3 f3-l ttu b flex flex-column flex-row-ns">
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
                        <h1 className="f1-m f-headline-l top-1-l bottom-1-l absolute mt6 mr5 mb5 ml4 mw2 mw6-ns white">Berkshire <br/> Hathaway Inc.</h1>
                    </div>
                </div>
            </div>
            
            <div className='pa3 pa4-m pa5-l mw9'>
                <div className='center f1 tc pb5'>
                    <h3 className="">Do you know what could beat the exciting feling of having a new computer?  Make your own PC!</h3>
                </div>
                <HomeContent />
                <HomeNews />
            </div>
        </div>
    )
}
