import React from 'react'

const About = () => {
    let workingOn = 'looking for a job to sharpen my skills, while sharpening my skills. '
    return (
        <section className='max'>
        <div className='about bg'>
            <span id='about' name='about'> &nbsp; </span>
            <h2>About My Work.</h2>
            <p>Using HTML, CSS and Javascript, I am able to create seamless user-interface that should feel intuitive 
            and user-friendly. In my spare time I am currently {workingOn}
            For state driven projects, I am familiar with react. The way state flows through the entire application 
            is very intriguing. For bigger applications I am familiar with redux and useContext to pass data more efficiently. 
            Using SQL3 and Node.js I am able create and maintain any RESTful database management system.
            On the side I'm an aspiring penetration tester. I travel wherever the data takes me.
            I'm curious to see where my learning journey takes me!</p>
        </div>
        <div className='about'>
            <h2>About My Hobbies</h2>
            <p>Within the last year, I picked up skateboarding as my main pasttime activity. 
                The amount of focus required to land multiple tricks inspires me to achieve greater goals. 
                With a skateboard I carve the concrete waves, while learning how to better balance my body and mind. 
                Secondly, Video games have been a part of my life since a child. I love challegning myself to solve new puzzles. 
                I've been blessed starting my life in a time where internet technology was about the equivalent of a toddler. 
                The experience watching everything grow rapidly is simply mind boggling. I prefer team games that require each individual to perform certain tasks, 
                because its a beautiful experience when random people come together to achieve the same end goal. 
                Lastly, fishing teaches patience. To be successfull one must learn what the conditions are under the water, what bait fish the fish prefer, 
                and how the weather conditions affect the species of fish. Patience is key when choosing the right lure and spot to fish.</p>
        </div>
        <div className='projectIntro'>
            <h2> About My Projects</h2>
            <p>Both during and after my studies at Lambda I've had the pleasure of finishing a great variety of challenges. 
                Below are a few of my favorite projects starting from most current to the least. 
                A few projects provided are from build weeks. Build weeks take(s) a person or people from 
                each different learning units, and places individuals into a team. 
                There are three teams from the web engineering course, one for a marketing website, front-end application, and back-end. 
                During these projects, teamwork is essential to pass onto to the next unit.</p>
        </div>  
    </section>
    )
}
export default About

/*
About what I do for work - overveiw of schooling and major projects/ languages
Using HTML, CSS and Javascript, I am able to create seamless user-interface that should feel intuitive 
            and user-friendly. In my spare time I am currently {workingOn}
            For state driven projects, I am familiar with react. The way state flows through the entire application 
            is very intriguing. For bigger applications I am familiar with redux and useContext to pass data more efficiently. 
            Using SQL3 and Node.js I am able create and maintain any RESTful database management system.
            On the side I'm an aspiring penetration tester. I travel wherever the data takes me.
            I'm curious to see where my learning journey takes me!



About what I do for fun-
Skateboarding - Within the last year, I picked up skateboarding as my main pasttime activity. The amount of focus required to land multiple trick inspires me to achieve greater goals. 
    With a skateboard I carve the concrete waves, while learning how to better balance my mind and body.

Video Games Secondly, I've been blessed starting my life in a time were technology was about the equivalent of a toddler. The experience watching everything grow rapidly is simply mind boggling. 
    I prefer team games that require each individual to perform certain tasks, because its a beautiful experience when random people come together to achieve the same end goal.

Fishing - Fishing teaches patience and learning. To be successfull one must learn what the conditions are under the water, what bait fish the fish prefer, 
and how the weather conditions affect the species of fish. Patience is key when choosing the right lure and spot to fish.

Learn about pen testing - 



Projects- Both during and after my studies at Lambda I've had the pleasure of finishing a great variety of challenges. 
                Below are a few of my favorite projects starting from most current to the least. 
                A few projects provided are from build weeks. Build weeks take(s) a person or people from 
                each different learning units, and places individuals into a team. 
                There are three teams from the web engineering course, one for a marketing website, front-end application, and back-end. 
                Teamwork during these projects is essential to pass onto to the next unit.



???

*/