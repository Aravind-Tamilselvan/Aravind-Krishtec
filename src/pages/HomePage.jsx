import React from 'react'
import '../pages/HomePage.css'
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";


const HomePage = () => {
    return (
        <>
            <div className="home" id="home">
                <img src='/ProfileImg.jpg' alt="Profile picture" className="profile-img"/>
                    <div>
                        <div className="content">
                            <h3>Hello,myself</h3>
                            <h1>Aravind T</h1>
                            <h3>I'm a Frontend Developer</h3>
                            <p>A  B.Tech Artificial Intelligence and Data Science student interested in building web applications that solve real world problems</p>
                        </div>
                        <div className="icons">
                            <a className="bttn" href="https://www.linkedin.com/in/aravind-t-3506a8228/"><FaLinkedinIn/></a>
                            <a href="#" className="bttn"><LuGithub /></a>
                            <a href="https://www.instagram.com/aravind__privt/" className="bttn"><FaInstagram/></a>

                            <a href="/Aravind.pdf" download="Aravind.pdf"><button className="btn">Download CV</button></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default HomePage