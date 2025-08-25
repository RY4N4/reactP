import React from 'react'
import './index.css'
import cookingImg from './cooking.png'

export default function Index(){
  return(
    <>
        <div className='header'>
            <img src='/cooking.png' className='heading-logo'/>
            <div className='heading-title'>Chef Claude</div>
        </div>
        <div className='input-form'>
            <input type='text' placeholder='e.g. oregano' className='placehold'/>
            <button className='add-ingredient'>+ Add ingredient</button>
        </div>
    </>
  )
}
