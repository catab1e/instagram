import React from 'react';
import "./nav-panel.css"

const NavPanel = () => {
    return (
        <div className='nav-panel'>
            <span>HOME</span>
            <span>SEARCH</span>
            <span>UPLOAD</span>
            <span>CHATS</span>
            <span>PROFILE</span>
        </div>
    );
};

export default NavPanel;