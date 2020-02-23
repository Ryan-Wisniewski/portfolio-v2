import React from 'react'
import stbImg from '../assets/split-the-bill.PNG'
import npodImg from '../assets/firefly.PNG'
import rdxImg from '../assets/ReduxDogs.PNG'
import stb2Img from '../assets/CSBW2.PNG'

const Projects = () => {



    return (
        <section>
            <span id='projects' name='projects'> &nbsp; </span>       
            <div className='projects'>
                    <div className='project1'>
                        <div className='textAll'>
                            <h3>Split the Bill</h3>
                            {/* During the first day we were introduced to GitHub, in the first month we learned html and css quickly and efficiently.
                            We dove right into the my current favorite language, javascript. With javascript we learned DOM 
                            manipulation.  */}
                            <p className='text'>
                                App designed to take bills of any tab between people remembering who owes how much
                                Operated with team on new technologies to discover in depth in the future
                                Built the styling with the Front-end dev to cement basic functionality 
                                of an up unit by receiving a first pass crash course of React
                            </p>
                            <p>Utilized: HTML/CSS, JS, React</p>
                            <a  className='link' href='https://github.com/lambda-split-the-bill' target="_blank" rel="noopener noreferrer">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://split-the-bill.netlify.com/' target="_blank" rel="noopener noreferrer">
                            <p className='webLink'>Check out the website</p>
                            <img src={stbImg} alt='project 1 img here' className='img' />
                        </a>
                    </div>                              
                    <div className='project2'>
                        
                        <div className='textAll'> 
                            <h3>Redux with Puppies</h3>
                            <p className='text'>By the third month I had become very comfortable with React by the end of the month we had learned Redux and useContext among 
                                other methods to handle state for larger applications. Reducers and actions were my favorite thing to learn in the program! Redux was one
                                of the biggest challenges, and the first time I had to envision how data passes through an application.
                            </p>
                            <p>Utilized: React, Redux</p>
                            <a className='link' href='https://github.com/Ryan-Wisniewski/React-Redux-App' target="_blank" rel="noopener noreferrer">GitHub repository here</a>
                        </div> 
                        <a className='imgAll' href='https://redux-with-puppeis.netlify.com/' target="_blank" rel="noopener noreferrer">
                            <p className='webLink'>Check out the website</p>
                            <img src={rdxImg} alt='project 3 img here' className='img' />
                        </a>
                             
                    </div>                              
                    <div className='project1'>
                        <div className='textAll'>
                            <h3>Project Firefly</h3>
                            <p className='text'>
                                Game that teaches young children to think like an engineer
                                Revised with stakeholder to ensure a product was released in a timely manner by holding weekly meetings to discuss progress
                                Rebuilt the user flow to increase readability by separating the game server from the users
                                Matched product to the vision of the stakeholder by implementing the design canvases
                            </p>
                            <p>Utilized: Mongo, Firebase, React, Node, Express</p>
                            <a className='link' href='https://github.com/Lambda-School-Labs/project-firefly-site' target="_blank" rel="noopener noreferrer">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://projectfirefly.netlify.com/' target="_blank" rel="noopener noreferrer">
                            <p className='webLink'>Check out the website</p>
                            <img src={npodImg} alt='project 2 img here' className='img' />
                        </a>
                    </div>                
                
                    <div className='project2'>  
                        <div className='textAll'>
                            <h3>Computer Science Build Week 2</h3>
                            <p className='text'>
                                Applied the skills and knowledge from the graphs, blockchain, and computer 
                                architecture. 
                                Programmed an algorithm to automate mining  blockchain blocks with python3. 
                                Mined ⅓ of the 4000 total coins out of 10 teams. 
                            </p>
                            <p>Utilized: Python3</p>
                            <a className='link' href='https://github.com/Team-Nowhere/CS-Build-Week-2' target="_blank" rel="noopener noreferrer">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://github.com/Team-Nowhere/CS-Build-Week-2' target="_blank" rel="noopener noreferrer">

                            <p className='webLink'>Check out the Github</p>
                            <img src={stb2Img} alt='project 4 img here' className='img' />
                        </a>
                    </div>               
            </div>
        </section>
    )
}
export default Projects