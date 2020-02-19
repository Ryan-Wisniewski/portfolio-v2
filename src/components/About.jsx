import React from 'react'

const About = () => {
    let workingOn = 'learning to penetrate my own network from within my single computer.'
    return (
        <section className='max'>
        <div className='about bg'>
            <span id='about' name='about'> &nbsp; </span>
            <h2>About what I do.</h2>
            <p>
            Using HTML/CSS, and Javascript, I am able to create seamless user-interface that should feel intuitive 
            and user-friendly. In my spare time I am currently: {workingOn}
            For state driven projects, I am familiar with react. The way state flows through the entire application 
            is very intriguing. For bigger apps, in order to pass data more easily, I am familiar with redux and useContext. 
            Using SQL3 and Node.js I am able create and maintain a RESTful database management system.
            On the side I'm an aspiring ethical hacker. I travel wherever the data takes me.
            I'm curious to see where my learning journey takes me!</p>
        </div>
        <div className='projectIntro'>
            <h2>Projects</h2>
            <p>During my studies at Lambda I've had the pleasure of finishing a great variety of challenges. Here are my favorite from each month of growth.
                A few projects provided are from a build week. Build weeks take a person/people from each different learning unit, and places individuals 
                into a team. There are three teams from the web engineering course, one for marketing, front-end, and back-end. Team-work during these projects 
                is essential to pass onto to the next unit.</p>   
        </div>  
    </section>
    )
}
export default About