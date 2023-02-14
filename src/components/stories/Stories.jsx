import React from 'react';
import "./stories.css"
import Story from './Story';
import tesla from "../../assets/tesla.jpg"
import niss from "../../assets/niss.jpg"
import jiga from "../../assets/jiga.jpg"

const Stories = () => {
    return (
        <div className='stories'>
            <div className='stories__inner'>
                <Story src={tesla}/>
                <Story src={niss}/>
                <Story src={jiga}/>
                <Story src={tesla}/>
                <Story src={niss}/>
                <Story src={jiga}/>
                <Story src={tesla}/>
                <Story src={niss}/>
                <Story src={jiga}/>
            </div>
        </div>
    );
};

export default Stories;