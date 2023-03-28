import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className="sticky  bg-black text-white flex space-x-32 h-20">
            <nav>
                <Link to="/about">About</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </header>
    )
}

export default Header;