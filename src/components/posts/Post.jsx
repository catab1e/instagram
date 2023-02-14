import React from "react";
import "./post.css";
import logo2 from "../../assets/logo2.png";
import niss from "../../assets/niss.jpg";
import {ReactComponent as LikeIcon} from "../../assets/icons/like.svg";
import {ReactComponent as CommIcon} from "../../assets/icons/comm.svg";
import {ReactComponent as StrelkaIcon} from "../../assets/icons/strelka.svg";
import {ReactComponent as ZakladkaIcon} from "../../assets/icons/zakladka.svg";

const Post = (props) => {
  return (
    <div className="post">
      <div className="prof-info">
        <div className="prof-info__img">
            <img src={niss} alt="" />
        </div>
        <h3 className="txt">Name</h3>
      </div>

      <div className="post--img-container">
          <img className="post--img" src={props.src} alt="" />
      </div>

      <div className="post--icons">
        <div className="post-icons__left">
          <LikeIcon className="icons" width="32px" height="32px"/>
          <CommIcon className="icons" width="32px" height="32px"/>
          <StrelkaIcon className="icons" width="32px" height="32px"/>
        </div>

        <div className="post-icons__right">
          <ZakladkaIcon className="icons" width="32px" height="32px"/>
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
