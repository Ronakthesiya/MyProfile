import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    function closeMenu(){
        if(menuOpen){
            setMenuOpen(false);
        }
    }

return (
    <nav id='top'>
        <Link to="/home" className='title'>Ronak Thesiya</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><a href="/#home" onClick={closeMenu}>Home</a></li>
            <li><a href="/#education" onClick={closeMenu}>Education</a></li>
            <li><a href="/#skill" onClick={closeMenu}>Skill</a></li>
            <li><a href="/#project" onClick={closeMenu}>Project</a></li>
            <li><a href="/#codingprofile" onClick={closeMenu}>Coding Profile</a></li>
            <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
    </nav>
)
}

export default Navbar