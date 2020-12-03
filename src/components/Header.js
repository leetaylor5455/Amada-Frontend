import React, { useState, useEffect, Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ### COMPONENTS ###
import Nav from './Nav';

function Header() {

    const location = useLocation();
    console.log(location.pathname)

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerVariants = {
        first: {
            display: 'block',
            opacity: scrollPosition > 400 ? 1 : 0
        }
    
    }
    
    function StickyHeader() {
        return (
            <header className='fixed'
                style={scrollPosition > 300 ? headerVariants.first : { display: 'none' }}
            >
                <div className='header'>
                    <Link to='/home'>
                        <h1>amada</h1>
                    </Link>
                    
                    <Nav/>
                </div>
            </header>
        )   
    }

    if (location.pathname === '/home' || location.pathname === '/load') {
        return ( <StickyHeader /> );
    } else {
        return (
            <>
                <header className='static'>
                    <div className='header container'>
                        <Link to='/home'>
                            <h1>amada</h1>
                        </Link>
                        
                        <Nav/>
                    </div>
                </header>
                <StickyHeader />
            </>
        )
            
    }
}

export default Header;