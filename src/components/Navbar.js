import React,{useState, useEffect} from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    useEffect (() => {
        const innernav = document.querySelector('.inner-nav')
        if(showNav === true){
            innernav.style.left = '0px'
        }
        else{
            innernav.style.left = '-300px'
        }
    }, [showNav])

    const handleClick = () => {
        setShowNav(!showNav)
    }
  return (
    <div className='navbar'>
        <div onClick={handleClick} className={`${showNav ? "hamburger1":"hamburger"}`}></div>
        <div className='logo'>
            <h1>Echo Minds</h1>
            <div className='image'>
            <img src=""/>
            </div>
            <nav className='menu'>
                <ul className='inner-nav'>
                    <li><a href="#Aboutus">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#tryit">Try it</a></li>
                </ul>
            </nav>
        </div>
        <div className='button'>
            <a href="/login">Login / Register</a>
        </div>
    </div>
  )
}

export default Navbar;