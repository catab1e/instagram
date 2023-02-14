import React from 'react';
import Stories from '../stories/Stories';
import Posts from '../posts/Posts';
import "./main-page.css"
import RecAcc from '../rec-acc/RecAcc';
import SideBar from '../side-bar/SideBar';

const MainPage = () => {
    return (
        <div className='main-page'>
            {/* <Stories /> */}
            <SideBar />
            <Posts />
            <RecAcc />
        </div>
    );
};

export default MainPage;