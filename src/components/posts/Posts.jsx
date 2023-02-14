import React from 'react';
import Stories from '../stories/Stories';
import Post from './Post';
import "./posts.css"
import logo2 from "../../assets/logo2.png";
import niss from "../../assets/niss.jpg";
import jiga from "../../assets/jiga.jpg";
import tesla from "../../assets/tesla.jpg";

const Posts = () => {
    return (
        <div className='posts'>
            <Stories />

            <Post src={logo2}/>
            <Post src={niss}/>
            <Post src={jiga}/>
            <Post src={tesla}/>
            
        </div>
    );
};

export default Posts;