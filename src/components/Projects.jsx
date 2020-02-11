import React from 'react'

const Projects = () => {



    return (
        <section>
            
            <div className='project bg'>
                <span id='project' name='project'> &nbsp; </span>
                <h2>Projects</h2>
                <p>During my studies at Lambda I've had the pleasure of finishing a great variety of challenges. Here are my favorite from each month of growth.
                     A few projects provided are from a build week. Build weeks take a person/people from each different learning unit, and places individuals 
                     into a team. There are three teams from the web engineering course, one for marketing, front-end, and back-end. Team-work during theese projects 
                     is essential to pass onto to the next unit.</p>   
            </div>   
            <div className='flexRowWrap'>               
                    <div className='section bg flexColumnWrap'>
                        <h3>Begginner HTML, CSS, and JS</h3>
                        <a href='https://split-the-bill.netlify.com/'>
                            <img src='../assets/split-the-bill.PNG' alt='project1 img here' className='img' />
                        </a>
                        During the first day we were introcued to GitHub, in the first month we learned html and css quickly and effiecently.
                        We dove right into the my current favorite language, javascript. With javascript we learned DOM 
                        manipulation. 
                        <p>This project is from my first build week; I was responsible for the marketing page design. Our team
                        collbaorated all week to make sure it all fit together. It was a lot of fun to think about the grand scheme of things
                        as someone who still felt brand new to coding. </p>
                    </div>                              
                    <div className='section bg flexColumnWrap'>
                        <h3>Introduction to React</h3>
                        <a href='https://nasa-photooftheday.herokuapp.com/'>
                           <img src='../assets/Nasa-POD.PNG' alt='project1 img here' className='img' />
                        </a> 
                        <p>The second month was very interesting. Our className jumped right into the react tree, and we learned how to create components
                            and pass data in an application with plenty of props drilling! During this unit we learned how to use useState and useEffect
                            to manage the state of an application.</p>
                    </div>                              
                    <div className='section bg flexColumnWrap'>
                        <h3>Advanced State Management</h3>
                        <a href='https://redux-with-puppeis.netlify.com/'>
                            <img src='../assets/ReduxDogs.PNG' alt='project1 img here' className='img' />
                        </a>
                        <p>By the third month I had become very comfortable with the react tree. By the end of the month we had learned Redux and useContext among 
                            other methods to handle state for larger applications. Reducers and actions were my favorite thing to learn in the program! Redux was one
                            of the biggest challenges I had to invision how data passes through an application.
                        </p>
                    </div>                
                
                    <div className='section bg flexColumnWrap'>                       
                        <h3>Node with Express and SQL3</h3>
                        <a href='https://split-the-bill-be.herokuapp.com/'>
                            <img src='../assets/auroura.jpeg' alt='project1 img here' className='img' />
                        </a>
                        <p>I loved Learning Node and Express, because back end is all the logic puzzles. This is another build-week project. A team-member and I 
                            collaborated all week to deploy our server with postgress. During this week we learned postgress on the fly for our project! 
                        </p>
                        <a href='https://github.com/Split-The-Bill-Build-Week/Back-End' className='link'>Check out the repository here</a>
                    </div>               
            </div>
        </section>
    )
}
export default Projects