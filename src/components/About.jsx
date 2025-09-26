import React, { useEffect, useState } from 'react'

const About = () => {
    const check = (e) => {
        if(e.currentTarget.innerWidth < 1024 && !isMobile) {
            setIsMobile(true)
        } else if(e.currentTarget.innerWidth > 1024 && isMobile) {
            setIsMobile(false)
        }
    }
    window.addEventListener("resize", check);
    const [isMobile, setIsMobile]= useState(window.innerWidth > 1024 ? false : true)
    const [isMenuToggled, setIsMenuToggled]= useState({
        1: true,
        2: false,
        3: false
    })
    const onclick = (num) => {
        let temp = {
            1: false,
            2: false,
            3: false
        }
        temp[num] = !isMenuToggled[num]
        setIsMenuToggled(temp)
    }
    return (
        <div className='aboutDiv'>
        <div id='about'>
            {/* <span  name='about'> &nbsp; </span> */}
            <h2 onClick={() => onclick(1)}>
                About My Work 
                {isMobile && <span className='toggleButton'>{isMenuToggled[1] ? '-' : '+'}</span>}
            </h2>
            <p style={isMenuToggled[1] || !isMobile ? {display: 'block'} : {display: 'none'}}>Using React, I am able to create seamless user-interface that feels intuitive and user-friendly. 
                React is a framework that empowers the writing of HTML, CSS, and Javascript code in a more organized, 
                comprehensible manner. The way state flows through the entire application is very intriguing. 
                For state driven projects, I am familiar redux and useContext to pass data more efficiently. 
                For the back-end I understand SQL3 and Node.js, and I am able create and maintain any RESTful 
                database management system to store data effectively and efficiently. On the side I'm an aspiring 
                penetration tester. I travel wherever the data takes me. I'm curious to see where my learning journey takes me!</p>
        </div>
        <div>
            <h2 onClick={() => onclick(2)}>
                About My Hobbies 
                {isMobile && <span className='toggleButton'>{isMenuToggled[2] ? '-' : '+'}</span>}
            </h2>
            <p style={isMenuToggled[2] || !isMobile ? {display: 'block'} : {display: 'none'}}>Within the last year, I picked up skateboarding as my main pasttime activity. 
                The amount of focus required to land multiple tricks inspires me to achieve greater goals. 
                With a skateboard I carve the concrete waves, while learning how to better balance my body and mind. 
                Secondly, Video games have been a part of my life since a child. I love challegning myself to solve new puzzles. 
                I've been blessed starting my life in a time where internet technology was about the equivalent of a toddler. 
                The experience watching everything grow rapidly is simply mind boggling. I prefer team games that require each individual to perform certain tasks, 
                because its a beautiful experience when random people come together to achieve the same end goal. 
                Lastly, fishing teaches patience. To be successfull one must learn what the conditions are under the water, what bait fish the fish prefer, 
                and how the weather conditions affect the species of fish. Patience is key when choosing the right lure and spot to fish.</p>
        </div>
        <div>
            <h2 onClick={() => onclick(3)}>
                About My Projects 
                {isMobile && <span className='toggleButton'>{isMenuToggled[3] ? '-' : '+'}</span>}
            </h2>
            <p style={isMenuToggled[3] || !isMobile ? {display: 'block'} : {display: 'none'}}>Both during and after my studies at Lambda I've had the pleasure of finishing a great variety of challenges. 
                Below are a few of my favorite projects starting from most current to the least. 
                A few projects provided are from build weeks. Build weeks take(s) a person or people from 
                each different learning units, and places individuals into a team. 
                There are three teams from the web engineering course, one for a marketing website, front-end application, and back-end. 
                During these projects, teamwork is essential to pass onto to the next unit.</p>
        </div>
    </div>
    )
}
export default About