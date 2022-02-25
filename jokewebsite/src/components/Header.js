import React from 'react';
import "./Header.css";

function Header({ title }) {
    return (
        <header className='header-container'>
            <h1>
                {title}
            </h1>
        </header>
    )
}

export default Header