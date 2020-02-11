import React from 'react'

const Navbar = () => {


    

    return (
    <header className='nav'>
        <div className='dropdown'>
            <nav className='navbar dropdown-items'>
                <a className="dropdown-links" href='#navbar'>Home</a>
                <a className="dropdown-links" href='#about'>About</a>
                <a className="dropdown-links" href='#project'>Projects</a>
                <a className="dropdown-links" href='#footer'>Contact</a>
                <a className="dropdown-links" href='#more'>More</a>
            </nav>
        </div>
    </header>
    )
}

export default Navbar