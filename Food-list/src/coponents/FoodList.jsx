import React from 'react'
import "./Food.css"
function FoodList({food}){
  const print=()=>(
    console.log(`${food} this food do you want`)
  )
  return (
    <div>
       <li>
        <span className='food'>{food}
        <button style={{float:'right'}} 
        onClick={print}>click</button></span>
       </li>
    </div>
  )
}

export default FoodList