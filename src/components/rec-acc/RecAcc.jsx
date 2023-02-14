import React from 'react';
import "./rec-acc.css"
import niss from "../../assets/niss.jpg"
import RecAccItem from './RecAccItem';

const RecAcc = () => {
    return (
        <div className='rec-acc'>
            <div className='rec-acc__curr-acc'>
                <div className='curr-acc__img'>
                    <img src={niss} alt="" />
                </div>

                <div className='curr-acc__info'>
                    <p className='txt bold'>Name</p>
                    <p className='txt'>main name</p>
                </div>

                <p className='txt'>Change acc</p>
            </div>

            <hr />

            <p className='txt'>Recommendations</p>

            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />
            <RecAccItem />

        </div>
    );
};

export default RecAcc;