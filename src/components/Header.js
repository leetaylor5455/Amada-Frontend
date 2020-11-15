import React from 'react';
import { Link } from 'react-router-dom';

// ### COMPONENTS ###
import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className='header container'>
                <Link to='/'>
                    <h1>amada</h1>
                </Link>
                
                <Nav />
            </div>
        </header>
        
    )
}

export default Header;