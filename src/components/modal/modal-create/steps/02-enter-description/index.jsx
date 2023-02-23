import React, { useState } from "react";

const EnterDescriptionStep = (props) => {
  const [description, setDescription] = useState("");

  function handleShare() {
    props.onStepFinish(description);
  }

  return (
    <div className="modal-create" onClick={props.onClose}>
      <div className="modal-create__content" onClick={(e) => e.stopPropagation}>
        <div className="content__header">
          <button className="back txt" onClick={props.onGoBack}>
            Back
          </button>
          <p className="txt bold">Create publication</p>
          <button className="next txt" onClick={handleShare}>
            Share
          </button>
        </div>

        <div className="content__post-container">
          <div className="content__photo">
            <img
              className="content__photo-image"
              src={props.image}
              alt=""
              width={400}
            />
          </div>

          <div className="modal-create__info">
            <div className="modal-create__descr">
              <textarea
                name=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterDescriptionStep;
