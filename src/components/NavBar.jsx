import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div class="nav-bar">
            <div class="Logo"><Link to={'/'}>ARAVIND T</Link></div>
            <div class="nav-tags">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>

            </div>
        </div>
    </>
  )
}

export default NavBar