import React from 'react'

const About = () => {
    let workingOn = 'finishing three challenges a day in python, and polishing up Bead It! to deploy a better version. '
    return (
        <section className='max'>
        <div className='about bg'>
            <span id='about' name='about'> &nbsp; </span>
            <h2>About what I do.</h2>
            <p>Using HTML, CSS and Javascript, I am able to create seamless user-interface that should feel intuitive 
            and user-friendly. In my spare time I am currently {workingOn}
            For state driven projects, I am familiar with react. The way state flows through the entire application 
            is very intriguing. For bigger applications I am familiar with redux and useContext to pass data more efficiently. 
            Using SQL3 and Node.js I am able create and maintain any RESTful database management system.
            On the side I'm an aspiring penetration tester. I travel wherever the data takes me.
            I'm curious to see where my learning journey takes me!</p>
        </div>
        <div className='projectIntro'>
            <h2>Projects</h2>
            <p>Both during and after my studies at Lambda I've had the pleasure of finishing a great variety of challenges. 
                Here are a few of me favorite projects starting from most current to the least. 
                A few projects provided are from build weeks. Build weeks take(s) a person or people from 
                each different learning units, and places individuals into a team. 
                There are three teams from the web engineering course, one for a marketing website, front-end application, and back-end. 
                Teamwork during these projects is essential to pass onto to the next unit.</p>   
        </div>  
    </section>
    )
}
export default About