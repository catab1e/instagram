import React, { Children } from 'react';
import "./chats.css"
import ChatsItem from './ChatsItem';

const Chats = () => {
    return (
        <div className='chats'>
            <div className='chats__left'>
                <div className='chats__left-header'>
                    sary
                </div>

                <div className='chats__left-items'>
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                    <ChatsItem />
                </div>
            </div>

            <div className='chats__right'>

            </div>
        </div>
    );
};

export default Chats;