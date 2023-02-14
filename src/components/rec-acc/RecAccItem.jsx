import React from 'react';
import "./rec-acc-item.css"
import niss from "../../assets/niss.jpg"


const RecAccItem = () => {
    return (
        <div className='rec-acc__recommend'>
                <div className='recommend__img'>
                    <img src={niss} alt="" />
                </div>

                <div className='recommend__info'>
                    <p className='txt bold'>Name</p>
                    <p className='txt'>user's follower</p>
                </div>

                <p className='txt'>Follow</p>
            </div>
    );
};

export default RecAccItem;