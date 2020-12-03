import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <ul>
                <Link>
                    <li>the process</li>
                </Link>
                <Link>
                    <li>portfolio</li>
                </Link>
                <Link to='/contact'>
                    <li>contact</li>
                </Link>
                {/* <Link>
                    <li>my kitchen</li>
                </Link> */}
            </ul>
        </nav>
    )
}

export default Nav;