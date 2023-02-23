import React, {useContext, useEffect} from 'react';
import Stories from '../stories/Stories';
import Post from './Post';
import "./posts.css"
import logo2 from "../../assets/logo2.png";
import niss from "../../assets/niss.jpg";
import jiga from "../../assets/jiga.jpg";
import tesla from "../../assets/tesla.jpg";
import {userContext} from "../../contexts/UserContext";

const Posts = () => {
    const {users, getUsers} = useContext(userContext)

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='posts'>
            <Stories />

            <Post userId={1} src={logo2}/>
            <Post userId={2} src={niss}/>
            <Post userId={1} src={jiga}/>
            <Post userId={3} src={tesla}/>
            
        </div>
    );
};

export default Posts;