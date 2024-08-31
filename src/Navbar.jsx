import React from 'react'
import two from '/images/2.png'
import './App.css'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <>
    <nav className='shayan'>
        <div><img src={two} alt="" className='logo'/></div>
        <div>
            <ul className='ul'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    </nav>
    
    {/* <div className='bg-img' style={{ backgroundImage: `url(${bg})` }} >
     <div className='text'>
     <p className='corner'>Food Corner</p>
      <p className='click'>PAKISTANI FOOD AT ONE CLICK</p>
      <button className='order'>ORDER NOW</button>
     </div>
    </div> */}
    
    </>
  )
}

export default Navbar