import React, {useState} from "react";
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setnav] = useState(false);
    const changeNavBackground = () =>{
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeNavBackground);

    return(
        <nav className={nav ? "nav active": "nav"}>
            <Link to="main" className="logo"  smooth={true} duration={500}>
                <img src={logo} alt="" />
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={500}>Header</Link></li>
                <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
                <li><Link to="presentaion" smooth={true} duration={500}>Offer</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;