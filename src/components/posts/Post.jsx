import React from 'react';
import "./post.css"
import logo2 from "../../assets/logo2.png"

const Post = () => {
    return (
        <div className='post'>
            <div className='prof-info'>
                <img src={logo2} alt="" />
                <h3>Name</h3>
            </div>
            <img className='post--img' src={logo2} alt="" />
            
            <div className='post--icons'>

            </div>

            <div className='post--descr'>

            </div>
        </div>
    );
};

export default Post;