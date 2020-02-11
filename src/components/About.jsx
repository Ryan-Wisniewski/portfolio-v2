import React from 'react'

const About = () => {
    let workingOn = 'working on growing in javascript while I learn python.'
    return (
        <section className='about bg'>
            <span id='about' name='about'> &nbsp; </span>
            <h2>About what I do.</h2>
            <p>
            Using html, css, and javascript, I am able to create seamless user-interface that hopefully feels intuitive 
            and user-friendly. In my spare time I am currently: <span>{workingOn}</span>
            For state driven projects, I am familiar with react. The way state flows through the entire application 
            is very intriguing. For bigger apps to pass data much easier, I am familiar with redux, and a few other state 
            management systems. Using SQL3 and Node.js I am able create and maintain a RESTful database management system.
            I'm also learning Mongo for a project I am working on currently! Big shout out to Lambda school and everyone else who has
            helped me along the way! Im excited to see where my coding journey will take me!</p>
        </section>
    )
}
export default About