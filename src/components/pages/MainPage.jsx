import React from 'react';
import Posts from '../posts/Posts';
import "./main-page.css"
import RecAcc from '../rec-acc/RecAcc';

const MainPage = () => {
    return (
        <div className='main-page'>
            <Posts />
            <RecAcc />
        </div>
    );
};

export default MainPage;