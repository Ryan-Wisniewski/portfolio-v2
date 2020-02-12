import React from 'react'
import stbImg from '../assets/split-the-bill.PNG'
import npodImg from '../assets/Nasa-POD.PNG'
import rdxImg from '../assets/ReduxDogs.PNG'
import auroImg from '../assets/auroura.jpeg'

const Projects = () => {



    return (
        <section>
            <div className='projects'>
            <span id='projects' name='projects'> &nbsp; </span>       
                    <div className='project1'>
                        <div className='textAll'>
                            <h3>Split the Bill (1st month student)</h3>
                            {/* During the first day we were introduced to GitHub, in the first month we learned html and css quickly and efficiently.
                            We dove right into the my current favorite language, javascript. With javascript we learned DOM 
                            manipulation.  */}
                            <p className='text'>This project is from my first build week; I was responsible for the marketing page design. Our team
                            collaborated all week to make sure it all fit together. It was a lot of fun to think about the grand scheme of things
                            as someone who still felt brand new to coding. </p>
                            <a href='https://github.com/lambda-split-the-bill' className='link'>GitHub repository here</a>
                        </div>
                        <a href='https://split-the-bill.netlify.com/'>
                            <img src={stbImg} alt='project 1 img here' className='img' />
                        </a>
                    </div>                              
                    <div className='project2'>
                        <div className='textAll'>
                            <h3>Nasa Photo of the Day</h3>
                            <p className='text'>The second month was very interesting. Our className jumped right into the react tree, and we learned how to create components
                                and pass data in an application with plenty of props drilling! During this unit we learned how to use useState and useEffect
                                to manage the state of an application.</p>
                            <a href='https://github.com/Ryan-Wisniewski/nasa-photo-of-the-day' className='link'>GitHub repository here</a>
                        </div>
                        <a href='https://nasa-photooftheday.herokuapp.com/'>
                           <img src={npodImg} alt='project 2 img here' className='img' />
                        </a> 
                    </div>                              
                    <div className='project1'>
                        <div className='textAll'> 
                            <h3>Redux with Puppies</h3>
                            <p className='text'>By the third month I had become very comfortable with the react tree. By the end of the month we had learned Redux and useContext among 
                                other methods to handle state for larger applications. Reducers and actions were my favorite thing to learn in the program! Redux was one
                                of the biggest challenges I had to envision how data passes through an application.
                            </p>
                            <a href='https://github.com/Ryan-Wisniewski/React-Redux-App' className='link'>GitHub repository here</a>
                        </div> 
                        <a href='https://redux-with-puppeis.netlify.com/'>
                            <img src={rdxImg} alt='project 3 img here' className='img' />
                        </a>
                    </div>                
                
                    <div className='project2'>  
                        <div className='textAll'>
                            <h3>Split the Bill (4th month student)</h3>
                            <p className='text'>I loved Learning Node and Express, because back end is all the logic puzzles. This is another build-week project. A team-member and I 
                                collaborated all week to deploy our server with PostgreSQL. During this week we learned PostgreSQL on the fly for our project! 
                            </p>
                            <a href='https://github.com/Split-The-Bill-Build-Week/Back-End' className='link'>GitHub repository here</a>
                        </div>
                        <a href='https://split-the-bill-be.herokuapp.com/'>
                            <img src={auroImg} alt='project 4 img here' className='img' />
                        </a>
                    </div>               
            </div>
        </section>
    )
}
export default Projects