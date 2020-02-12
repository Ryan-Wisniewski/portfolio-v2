import React from 'react'
import {Link} from 'react-router-dom'
import gimg from '../assets/githubLogo.png'
import limg from '../assets/linkedinLogo.png'

const Navbar = () => {


    

    return (
    <header className='nav'>
        <div className='dropdown'>
            <nav className='navbar dropdown-items'>
                <a className="dropdown-links left" href='#home'>Home</a>
                <a className="dropdown-links" href='#about'>About</a>
                <a className="dropdown-links" href='#projects'>Projects</a>
                <a className="dropdown-links" href='#contact'>Contact</a>
                {/* <a className="dropdown-links" href='#more'>More</a> */}
            </nav>
        </div>
        <div className='socials'>
            <a href='https://github.com/Ryan-Wisniewski' ><img src={gimg} alt='Github logo'/></a>
            <a className='right' href='http://www.linkedin.com/in/ryan-wisniewski' ><img src={limg} alt='LinkedIn logo'/></a>
        </div>
    </header>
    )
}

export default Navbar