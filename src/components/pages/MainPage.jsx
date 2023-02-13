import React from 'react';
import Stories from '../stories/Stories';
import Posts from '../posts/Posts';
import "./main-page.css"

const MainPage = () => {
    return (
        <div className='main-page'>
            <Stories />
            <Posts />
        </div>
    );
};

export default MainPage;