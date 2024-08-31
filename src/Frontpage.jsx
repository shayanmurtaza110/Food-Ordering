import React from 'react'
import bg from  '/images/11.jpeg'


function Frontpage() {
  return (
   <>

<div className='bg-img' style={{ backgroundImage: `url(${bg})` }} >
     <div className='text'>
     <p className='corner'>Food Corner</p>
      <p className='click'>PAKISTANI FOOD AT ONE CLICK</p>
      <button className='order'>ORDER NOW</button>
     </div>
    </div>

   </>
  )
}

export default Frontpage