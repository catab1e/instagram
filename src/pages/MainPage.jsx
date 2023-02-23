import React from "react";
import Posts from "../components/posts/Posts";
import "./main-page.css";
import RecAcc from "../components/rec-acc/RecAcc";

const MainPage = () => {
  return (
    <div className="main-page">
      <Posts />
      <RecAcc />
    </div>
  );
};

export default MainPage;
