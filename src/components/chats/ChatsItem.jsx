import React from "react";
import "./chats-item.css"
import niss from "../../assets/niss.jpg"

const ChatsItem = () => {
  return (
    <div className="chats-item">
      <div className="chats-item__img">
        <img src={niss} alt="" />
      </div>

      <div className="chats-item__info">
        sary
      </div>
    </div>
  );
};

export default ChatsItem;
