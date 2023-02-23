import React, {useState} from "react";
import "./side-bar.css";
import {ReactComponent as HomeIcon} from "../../assets/icons/panel-icons/home.svg";
import {ReactComponent as SearchIcon} from "../../assets/icons/panel-icons/search.svg";
import {ReactComponent as BellIcon} from "../../assets/icons/panel-icons/bell.svg";
import {ReactComponent as BurgerIcon} from "../../assets/icons/panel-icons/burger.svg";
import {ReactComponent as ProfileIcon} from "../../assets/icons/profile.svg";
import {ReactComponent as MessageIcon} from "../../assets/icons/message.svg";
import {ReactComponent as BrowserIcon} from "../../assets/icons/browser.svg";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import ModalCreate from "../modal/modal-create";

function SideBar() {
  const [modalActive, setModalActive] = useState(false);

  function handleClose() {
    setModalActive(false);
  }

  return (
    <>
      <div className="side-bar">
        <div className="side-bar__logo">
          <h1 className="logo">Instagram</h1>
        </div>

        <div className="side-bar__panel">
          <div className="panel__item">
          <span>
            <HomeIcon className="panel-icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Home</p>
          </div>

          <div className="panel__item">
          <span>
            <SearchIcon className="panel-icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Find</p>
          </div>

          <div className="panel__item">
          <span>
            <BrowserIcon className="icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Interesting</p>
          </div>

          <div className="panel__item">
          <span>
            <HomeIcon className="panel-icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Reels</p>
          </div>

          <div className="panel__item">
          <span>
            <MessageIcon className="icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Messages</p>
          </div>

          <div className="panel__item">
          <span>
            <BellIcon className="panel-icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Notifications</p>
          </div>

          <div className="panel__item" onClick={() => setModalActive(true)}>
          <span>
            <PlusIcon className="icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Create</p>
          </div>

          <div className="panel__item" onClick={() => setModalActive(false)}>
          <span>
            <ProfileIcon className="icons" width="32px" height="32px" />
          </span>
            <p className="item__txt">Profile</p>
          </div>
        </div>

        <div className="panel__more">
        <span>
          <BurgerIcon className="panel-icons" width="32px" height="32px" />
        </span>
          <p className="item__txt">More</p>
        </div>
      </div>

      {modalActive && <ModalCreate onClose={handleClose} />}

    </>
  );
}

export default SideBar;
