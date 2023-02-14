import React from 'react';
import "./nav-panel.css"
import {ReactComponent as SecboxIcon} from "../../assets/icons/secbox.svg"
import {ReactComponent as BrowserIcon} from "../../assets/icons/browser.svg"
import {ReactComponent as ProfileIcon} from "../../assets/icons/profile.svg"
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg"
import {ReactComponent as MessageIcon} from "../../assets/icons/message.svg"


const NavPanel = () => {
    return (
        <div className='nav-panel'>
            <span><SecboxIcon className='icons' width="32px" height="32px" /></span>
            <span><BrowserIcon className='icons' width="32px" height="32px" /></span>
            <span><PlusIcon className='icons' width="32px" height="32px" /></span>
            <span><MessageIcon className='icons' width="32px" height="32px" /></span>
            <span><ProfileIcon className='icons' width="32px" height="32px" /></span>
        </div>
    );
};

export default NavPanel;