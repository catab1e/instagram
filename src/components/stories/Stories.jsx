import React, { useContext, useEffect } from 'react';
import "./stories.css"
import Story from './Story';
import { userContext } from '../../contexts/UserContext';

const Stories = () => {

    const {users , getUsers} = useContext(userContext)


    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='stories'>
            <div className='stories__inner'>
                {users.map((item , index) => (
                    <Story key={index} item={item} /> 
                ))}
            </div>  
        </div>
    );
};

export default Stories;