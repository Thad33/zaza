import React, { useState } from 'react'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

function Destinations() {

    let [currentDestination, setDestination] = useState(0); // change this to show a different destination

  return (
    <div className='destinations-wrapper'>
        <ul className="des-nav">
            <li className='des-nav-item'><button className={currentDestination === 0 ? "current": ""} onClick={() => setDestination(0)}>Moon</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 1 ? "current": ""} onClick={() => setDestination(1)}>Mars</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 2 ? "current": ""} onClick={() => setDestination(2)}>Europa</button></li>
            <li className='dest-nav-item'><button className={currentDestination === 3 ? "current": ""} onClick={() => setDestination(3)}>Titan</button></li>
        </ul>

        <div className='dest'>
            {/** Destination */}
            <div className={currentDestination === 0 ? "show destination" : "hide destination"}>
                <div className='dest-image'>
                    <img src={moon} alt="" />
                </div>
                <div className='dest-des'>
                    <h1 className='dest-title'>MOON</h1>
                    <div className='dest-para'>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>
                    <div className='dest-no'>
                        <div className='dest-dist'>
                            <small>AVG. DISTANCE</small>
                            <p>384, 400 KM</p>
                        </div>
                        <div className='dest-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>3 DAYS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 1 ? "show destination" : "hide destination"}>
                <div className='dest-image'>
                    <img src={mars} alt="" />
                </div>
                <div className='dest-description'>
                    <h1 className='dest-title'>MARS</h1>
                    <div className='dest-para'>
                        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                    </div>
                    <div className='dest-no'>
                        <div className='dest-dist'>
                            <small>AVG. DISTANCE</small>
                            <p>225 MIL. KM</p>
                        </div>
                        <div className='dest-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>9 MONTHS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 2 ? "show destination" : "hide destination"}>
                <div className='dest-image'>
                    <img src={europa} alt="" />
                </div>
                <div className='dest-des'>
                    <h1 className='dest-title'>EUROPA</h1>
                    <div className='dest-para'>
                        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                    </div>
                    <div className='dest-no'>
                        <div className='dest-dist'>
                            <small>AVG. DISTANCE</small>
                            <p>628 MIL. KM</p>
                        </div>
                        <div className='dest-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>3 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 3 ? "show destination" : "hide destination"}>
                <div className='dest-image'>
                    <img src={titan} alt="" />
                </div>
                <div className='dest-des'>
                    <h1 className='dest-title'>TITAN</h1>
                    <div className='dest-para'>
                        <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                    </div>
                    <div className='dest-no'>
                        <div className='dest-dis'>
                            <small>AVG. DISTANCE</small>
                            <p>1.6 BIL. KM</p>
                        </div>
                        <div className='dest-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>7 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
        </div>
    </div>
  )
}

export default Destinations