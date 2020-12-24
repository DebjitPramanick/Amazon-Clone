import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Amazon Clone</Link>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/">Cart</Link></li>
                        <li><Link to="/watched">Sign-in</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
