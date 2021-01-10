import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'


export default function Navbar () {
    return (
        <nav>
            <div>
                <ul className='nav'>
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/movies'>Movies</Link></li>
                </ul>
            </div>
        </nav>
    )
}