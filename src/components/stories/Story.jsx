import React from 'react';
import "./story.css"

const Story = (props) => {
    return (
        <div className='story'>
            <div className='story--circle'>
                <img src={props.src} alt="" />
            </div>
            <p>name</p>
        </div>
    );
};

export default Story;