import React, {useState} from 'react';

import {Link} from 'react-scroll';


function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) { 
            setnav(true);
}
else{
    setnav(false);
 }
}

window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
         <Link to='#' className='logo'> 
            <img src="./images/logo.png"alt=''/>
         </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'> 
            <span className='nav-icon'></span>
        </label>

        <ul className="menu">
            <li><Link to='#' style={{color:"white"}}>Home</Link></li>
            <li><Link to='#' style={{color:"white"}}>Features</Link></li>
            <li><Link to='#' style={{color:"white"}}>Register</Link></li> 
            <li><Link to='#' style={{color:"white"}}>About</Link></li>
            <li><Link to='#' style={{color:"white"}}>Contact</Link></li>
        </ul>
        </nav>
    )
}

export default Navbar;