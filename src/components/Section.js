import React from 'react'
import CulturalAwarenessCalendar from '../images/CulturalAwarenessCalendar.png'
const Section = () => {
  return (
    <div className='section'>
        <div className='inner-section'>
            <div className='section-text'>
                <h5>Student friendly and Focus-Engaging</h5>
                <h1>Prefered by many students for JEE</h1>
                <p>Secure your seat now..</p>
                <div className='button'><a href="/">Try it</a></div>
            </div>
            <div className='section-image'>
                <img src={CulturalAwarenessCalendar} alt="" className='sec'/>
            </div>
        </div>
        <div className='card-section'>
            <div className='cards'>
                <div className='card'>
                    <img src="globe.png" alt="" />
                    <h1>Mathematics</h1>
                    <p>Maths Made easy to learn and apply</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="2.png" alt="" />
                    <h1>Physics</h1>
                    <p>Learning physics made interesting</p>
                    <a href="/">learn &rarr;</a>
                </div>
                <div className='card'>
                    <img src="3.png" alt="" />
                    <h1>Chemistry</h1>
                    <p>Chemistry-solving the universe mystery</p>
                    <a href="/">learn &rarr;</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section