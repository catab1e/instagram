import React from 'react';
import "./nav-panel.css"
import secbox from "../../assets/icons/secbox.svg"
import browser from "../../assets/icons/browser.svg"
import profile from "../../assets/icons/profile.svg"
import plus from "../../assets/icons/plus.svg"
import message from "../../assets/icons/message.svg"


const NavPanel = () => {
    return (
        <div className='nav-panel'>
            <span><img className='icons' src={secbox} alt="" /></span>
            <span><img className='icons' src={browser} alt="" /></span>
            <span><img className='icons' src={plus} alt="" /></span>
            <span><img className='icons' src={message} alt="" /></span>
            <span><img className='icons' src={profile} alt="" /></span>
        </div>
    );
};

export default NavPanel;