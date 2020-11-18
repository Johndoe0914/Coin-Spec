import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
import { useStateValue } from "../StateProvider";

import './Navbar.css';

const Navbar = () => {
     const [ dispatch] = useStateValue();
    
    return (
        <div className='navbar'>
            <nav className='navbar__nav'>
                <Link>
                <img 
                className='navbar__logo'
                src='https://037c96109eafecbaffbb36cdbe21d279.s3.eu-west-1.amazonaws.com/images/6da9a7b15530eb20539be62e1b63e5f0-base.png' alt={'logo'} />
                </Link>

               <Link to='/'>
               <div className='navbar__item'>
                    <span>Home</span>
                </div></Link>
             <Link to='/learnmore'>
             <div className='navbar__item'>
                    <span>Learn More</span>
                </div></Link>
             <Link to='/signup'>
             <div className='navbar__item'>
                    <span>Signup</span>
                    <br />
                    <span>Login</span>
                </div>
             </Link>
            <Link to='/dashboard/1'>
            <div className='navbar__item'>
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link to={`/settings/11`}>
            <div className='navbar__item'>
                    <span>Settings</span>
                </div>
            </Link>
            
            
            <div className='navbar__item'>
                    <Dropdown />
                </div>
      
            </nav>
        </div>
    )
}

export default Navbar
