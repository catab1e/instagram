import React, { useState } from "react";
import "./modal-create.css";
import { ReactComponent as SecBoxIcon } from "../../../assets/icons/secbox.svg";

const ModalCreate = ({ active, setActive }) => {
  const [inputValue, setInputValue] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [image, setImage] = useState(null);

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div
      className={active ? "modal-create active" : "modal-create"}
      onClick={() => setActive(false)}
    >
      <div className="modal-create__content" onClick={(e) => e.stopPropagation}>
        <div className="content__header">
          {inputValue && (
            <button
              className="back txt"
              onClick={() => {
                setInputValue(false);
              }}
            >
              Back
            </button>
          )}
          <p className="txt bold">Create publication</p>
          {inputValue && (
            <button className="next txt" onClick={handleButtonClick}>
              Share
            </button>
          )}
        </div>

        <div className="content__post-container">
          <div className="content__photo">
            {image && (
              <img
                className="content__photo-image"
                src={image}
                alt=""
                width={400}
              />
            )}

            {inputValue == "" && (
              <>
                <SecBoxIcon
                  className="icons"
                  width="200px"
                  height="200px"
                  color="000"
                />
                <label htmlFor="file" className="photo__label">
                  <span className="photo__txt txt bold">
                    Upload photo from your PC
                  </span>
                  <input
                    className="photo__upload"
                    type="file"
                    onChange={handleChangeInput}
                    value={inputValue}
                    name=""
                    id="file"
                  />
                </label>
              </>
            )}
          </div>

          {isButtonClicked && (
            <div className="modal-create__info">
              <div className="modal-create__descr">
                <textarea
                  name=""
                  placeholder="Description"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCreate;
