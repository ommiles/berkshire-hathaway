import React from 'react'
import Hero from '../warren-buffett_SOURCE_wallstreetplaybook.jpeg'
// import Hero from '../Warren-Buffetts-Berkshire-Hathaway-announced-more-than-35-billion-of-investments-last-quarter.jpeg'
// import Hero from '../740-warren-buffett-02.imgcache.reva8fc8cd50adcdab8f9649872e92cc161.jpg'
// import Hero from '../merlin_154369971_de0df103-464f-4831-8e13-e5bbb4fa8096-superJumbo.jpeg'
// import Hero from '../Warren-Buffett.jpeg'
import './Home.css'

export default function Home() {

    return (
        <div className='' id='HomeContainer'>
            {/* <h1>This is the Home component.</h1> */}
            {/* <div className=''> */}
                {/* <img src={Hero} alt='Warren Buffet Portrait' className='vh-75 w-100' /> */}
                {/* <div className='absolute hero-box'></div> */}
            {/* </div> */}
            <div className='flex mh5 f-subheadline justify-between'>
                <h1 className="ma0 w-30 absolute z-2">Steps In Installing Railing</h1>
                <div className="w-100">
                    <div className="aspect-ratio aspect-ratio--8x5">
                        <img src={Hero} className="aspect-ratio--object cover bg-center"></img>
                    </div>
                </div>
            </div>
            
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
    )
}
