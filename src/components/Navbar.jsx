import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="obj-1"></div>
        <div className="obj-2"></div>
        <div className="obj-3"></div>
        <header>
            <div className="logo">
                <h1>ilkerDeveloper</h1>
            </div>
            <nav >
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blog'}>Blogs</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
                <i style={{display: 'none'}} className="fa-solid fa-bars" onClick={() => { document.querySelector('ul').classList.toggle('active')}}></i>
        </header>
    </div>
  )
}

export default Navbar