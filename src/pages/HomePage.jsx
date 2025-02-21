import React from 'react'
import '../pages/HomePage.css'
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";


const HomePage = () => {
    return (
        <>
            <div class="home" id="home">
                <img src='/ProfileImg.jpg' alt="Profile picture" class="profile-img"/>
                    <div>
                        <div class="content">
                            <h3>Hello,myself</h3>
                            <h1>Aravind T</h1>
                            <h3>I'm a Frontend Developer</h3>
                            <p>A  B.Tech Artificial Intelligence and Data Science student interested in building web applications that solve real world problems</p>
                        </div>
                        <div class="icons">
                            <a class="bttn" href="https://www.linkedin.com/in/aravind-t-3506a8228/"><FaLinkedinIn/></a>
                            <a href="#" class="bttn"><LuGithub /></a>
                            <a href="https://www.instagram.com/aravind__privt/" class="bttn"><FaInstagram/></a>

                            <a href="/Aravind.pdf" download="Aravind.pdf"><button class="btn">Download CV</button></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default HomePage