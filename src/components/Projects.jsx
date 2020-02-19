import React from 'react'
import stbImg from '../assets/split-the-bill.PNG'
import npodImg from '../assets/Nasa-POD.PNG'
import rdxImg from '../assets/ReduxDogs.PNG'
import stb2Img from '../assets/stbStock.PNG'

const Projects = () => {



    return (
        <section>
            <span id='projects' name='projects'> &nbsp; </span>       
            <div className='projects'>
                    <div className='project1'>
                        <div className='textAll'>
                            <h3>Split the Bill - Marketing Page</h3>
                            {/* During the first day we were introduced to GitHub, in the first month we learned html and css quickly and efficiently.
                            We dove right into the my current favorite language, javascript. With javascript we learned DOM 
                            manipulation.  */}
                            <p className='text'>This project is from my first build week; I was responsible for the marketing page design. Our team
                            collaborated all week to make sure it all fit together. The project was a lot of fun to think about the grand scheme of things
                            as someone who still felt brand new to coding. </p>
                            <a  className='link' href='https://github.com/lambda-split-the-bill' target="_blank">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://split-the-bill.netlify.com/' target="_blank">
                            <p className='webLink'>Check out the website</p>
                            <img src={stbImg} alt='project 1 img here' className='img' />
                        </a>
                    </div>                              
                    <div className='project2'>
                        <div className='textAll'>
                            <h3>Nasa Photo of the Day</h3>
                            <p className='text'>The second month was very interesting. Our class jumped right into the react tree, and we learned how to create components
                                and pass data in an application with plenty of props drilling! During this unit we learned how to use useState and useEffect
                                to manage the state of an application.</p>
                            <a className='link' href='https://github.com/Ryan-Wisniewski/nasa-photo-of-the-day' target="_blank">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://nasa-photooftheday.herokuapp.com/' target="_blank">
                            <p className='webLink'>Check out the website</p>
                           <img src={npodImg} alt='project 2 img here' className='img' />
                        </a> 
                    </div>                              
                    <div className='project1'>
                        <div className='textAll'> 
                            <h3>Redux with Puppies</h3>
                            <p className='text'>By the third month I had become very comfortable with React by the end of the month we had learned Redux and useContext among 
                                other methods to handle state for larger applications. Reducers and actions were my favorite thing to learn in the program! Redux was one
                                of the biggest challenges, and the first time I had to envision how data passes through an application.
                            </p>
                            <a className='link' href='https://github.com/Ryan-Wisniewski/React-Redux-App' target="_blank">GitHub repository here</a>
                        </div> 
                        <a className='imgAll' href='https://redux-with-puppeis.netlify.com/' target="_blank">
                            <p className='webLink'>Check out the website</p>
                            <img src={rdxImg} alt='project 3 img here' className='img' />
                        </a>
                    </div>                
                
                    <div className='project2'>  
                        <div className='textAll'>
                            <h3>Split the Bill Back-end</h3>
                            <p className='text'>I loved Learning Node and Express, because back end is all the logic puzzles. This is another build-week project. A team-member and I 
                                collaborated all week to deploy our server with PostgreSQL. During this week I learned PostgreSQL on the fly for our project! I helped connect the back-end
                                to the front-end after deploying to heroku.
                            </p>
                            <a className='link' href='https://github.com/Split-The-Bill-Build-Week/Back-End' target="_blank">GitHub repository here</a>
                        </div>
                        <a className='imgAll' href='https://split-the-bill-be.herokuapp.com/' target="_blank">

                            <p className='webLink'>Check out the website</p>
                            <img src={stb2Img} alt='project 4 img here' className='img' />
                        </a>
                    </div>               
            </div>
        </section>
    )
}
export default Projects