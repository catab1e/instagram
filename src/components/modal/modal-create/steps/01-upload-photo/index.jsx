import React from "react";
import {ReactComponent as SecBoxIcon} from "../../../../../assets/icons/secbox.svg";

const UploadPhotoStep = (props) => {
    const handleChangeInput = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            props.onStepFinish(reader.result);
        };
    };

    function handleClose(e) {
        e.stopPropagation()

        props.onClose()
    }

    return (
        <div className="modal-create" onClick={handleClose}>
            <div className="modal-create__content" onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    <button className="back txt" onClick={handleClose}>
                        Close
                    </button>
                    <p className="txt bold">Create publication</p>
                </div>

                <div className="content__post-container">
                    <div className="content__photo">
                        {props.image && (
                            <img
                                className="content__photo-image"
                                src={props.image}
                                alt=""
                                width={400}
                            />
                        )}

                        {!props.image && (
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
                                        name=""
                                        id="file"
                                    />
                                </label>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPhotoStep;
