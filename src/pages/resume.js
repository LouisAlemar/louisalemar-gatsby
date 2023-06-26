import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Education from '../components/education/education';
import Experience from '../components/experience/experience';
import Skills from '../components/skills/skills';
import profile_pic from '../images/profile_pic.jpg';
import CustomNavbar from "../components/customNavbar/customNavbar.js";
import "../styles/App.scss"

class Resume extends Component {
	render(){
		return(
            <>
            <CustomNavbar />
                <Container>
                    <div className="resume-container">
                        <div col={4}>
                            <div>
                                <img 
                                    src={profile_pic} 
                                    alt="Louis Alemar"
                                    className="profile_pic"
                                />
                            </div>

                            <h2 style={{ paddingTop: '2rem' }}>Louis Alemar</h2>
                            <h4 style={{ color: 'white' }}>Front-End Developer</h4>
                            <hr style={{ borderTop: '3px solid rgb(72, 108, 175)', width: '100%' }}/>
                            <h5>Email</h5>
                            <p><a href="mailto:louisalemar@gmail.com">louisalemar@gmail.com</a></p>
                            <hr style={{ borderTop: '3px solid rgb(72, 108, 175)', width: '100%' }}/>
                        </div>
                        <div className="resume-right-col" col={8}>
                            <h2>Education</h2>

                            <Education
                                startYear={2012}
                                endYear={2015}
                                schoolName='Full Sail University'
                                schoolDescription='Bachelor of Science Degree in Music Production'
                            />

                            <hr style={{ borderTop: '3px solid rgb(75, 114, 189)' }}/>

                            <h2>Experience</h2>

                            <Experience
                                startYear={2020}
                                endYear={2023}
                                jobName='Launch Interactive'
                                jobTitle='Front-End Developer'
                                bullets={
                                    ['Developed guided tours for client products using Prismic and several Javascript technologies', 
                                    'Wrote unit-tests using React Testing Library for React components to make sure code doesn’t cause errors when running a build',
                                    'Renovated websites and used Elementor components with Wordpress',
                                    'Refactored components to help decrease the file size of the site and run faster on the web',
                                    'Architected React components from designs created on Figma by designers based on client needs']
                                }
                            />

                            <Experience
                                startYear={2020}
                                endYear={2020}
                                jobName='Trusted Media Brands'
                                jobTitle='Front-End Developer'
                                bullets={
                                    ['Implemented new website features using Javascript libraries such as React and Redux', 
                                    'Utilized PHP to implement website functionality',
                                    'Assisted supervisor in creating native templates for clients',
                                    'Collaborated with other engineers to improve coding workflow']
                                }
                            />

                            <Experience
                                startYear={2019}
                                endYear={2020}
                                jobName='Access Intelligence'
                                jobTitle='Front-End Developer'
                                bullets={
                                    ['Built custom Wordpress plugins', 
                                    'Assisted in building Views - a plugin to help build multi-page event sites',
                                    'Utilized React to build the interface of Views and Redux to maintain the application’s state',
                                    'Ensured cross-browser, cross-platform, and multiple device type compatibility for all web solutions and performed any necessary QA on finished products']
                                }
                            />

                            <Experience
                                startYear={2017}
                                endYear='Present'
                                jobName='The Berman Group'
                                jobTitle='Front-End Engineer'
                                bullets={
                                    ['Created and maintained websites for various types of companies using React', 
                                    'Built backends with NodeJS, Express, Sequelize, and MySQL databases to serve data to frontend',
                                    'Developed internal search engines for multiple clients such as BOMA New York and Noddle Companies',
                                    'Utilized AJAX, jQuery, and JavaScript to build website content with Wordpress page and custom post types on front-end as the lead front-end developer',
                                    'Supervised and trained junior developers on how to render Wordpress content to the DOM using PHP, jQuery, and JavaScript',
                                    'Conducted quality assurance tests to optimize usability and discover parse-time, run-time, and logical errors',
                                    'Collaborated with designers to create clean interfaces, intuitive interactions and user-friendly experiences']
                                }
                            />

                            <hr style={{ borderTop: '3px solid rgb(75, 114, 189)' }}/>

                            <div className="skills-container">

                                <h2>Skills</h2>

                                <Skills
                                    skill='Wordpress'
                                    progress={100}
                                />

                                <Skills
                                    skill='HTML/CSS'
                                    progress={100}
                                />

                                <Skills
                                    skill='JavaScript'
                                    progress={100}
                                />

                                <Skills
                                    skill='PHP'
                                    progress={90}
                                />

                                <Skills
                                    skill='React'
                                    progress={85}
                                />

                                <Skills
                                    skill='NodeJS'
                                    progress={70}
                                />

                                <Skills
                                    skill='MySQL'
                                    progress={70}
                                />
                            </div>

                        </div>
                    </div>
                </Container>
            </>
		)
	}
}

export default Resume;

export const Head = () => (
    <>
        <title>Louis Alemar | Front-End Developer</title>
        <script src="https://kit.fontawesome.com/458fac5c51.js" crossorigin="anonymous"></script>
    </>
)