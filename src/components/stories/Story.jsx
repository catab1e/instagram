import React from 'react';
import "./story.css"

const Story = (item) => {
    return (
        <div className='story'>
            <div className='story--circle'>
                <img src={item.src} alt="" />
            </div>
            <p>{item.name}</p>
        </div>
    );
};

export default Story;