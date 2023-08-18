import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <Link to="/"><div className='logo'></div></Link>
            <div>
                <img src="" alt="logo image"/>    
            </div>
        </div>
    );
};

export default Header;