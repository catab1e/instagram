import React from "react";
import "./post.css";
import logo2 from "../../assets/logo2.png";
import niss from "../../assets/niss.jpg";
import like from "../../assets/icons/like.svg";
import comm from "../../assets/icons/comm.svg";
import strelka from "../../assets/icons/strelka.svg";
import zakladka from "../../assets/icons/zakladka.svg";

const Post = (props) => {
  return (
    <div className="post">
      <div className="prof-info">
        <img src={logo2} alt="" />
        <h3 className="txt">Name</h3>
      </div>

      <div className="post--img-container">
          <img className="post--img" src={props.src} alt="" />
      </div>

      <div className="post--icons">
        <div className="post-icons__left">
          <img className="icons" src={like} alt="" />
          <img className="icons" src={comm} alt="" />
          <img className="icons" src={strelka} alt="" />
        </div>

        <div className="post-icons__right">
          <img className="icons" src={zakladka} alt="" />
        </div>
      </div>

      <div className="post--descr">
        <p className="txt bold">Likes 999999</p>
        <p className="txt bold">Name == descr</p>
        <p className="txt">Show comments</p>
        <input className="comm-inp txt" type="text" placeholder="leave a comment..." />
      </div>
    </div>
  );
};

export default Post;
