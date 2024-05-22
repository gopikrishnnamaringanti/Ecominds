import React from 'react'
import treew from '../images/treew.jpeg'
const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>Echo Minds</h3>
                <h1>Fusion into the Future</h1>
                <p>Sharpen your Analytical skills</p>
                <div className='button'><a href="/">Become a member<span>&#8599;</span></a></div>
            </div>
            <div className='image'>
                <img src={treew} alt="" />
            </div>
        </div>
     
    </div>
  )
}

export default Container