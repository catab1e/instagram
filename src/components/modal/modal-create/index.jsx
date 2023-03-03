import "./modal-create.css";

import React, {useState} from "react";

import UploadPhotoStep from "./steps/01-upload-photo";
import EnterDescriptionStep from "./steps/02-enter-description";

const STEPS = {
    UPLOAD_PHOTO: "UPLOAD_PHOTO",
    ENTER_DESCRIPTION: "ENTER_DESCRIPTION",
};

function ModalCreate(props) {
    const [state, setState] = useState({
        step: STEPS.UPLOAD_PHOTO,
        image: null,
        description: null,
    });

    function handleUploadPhotoStepFinish(image) {
        setState((prevState) => ({
            ...prevState,
            step: STEPS.ENTER_DESCRIPTION,
            image: image,
        }));
    }

    function handleEnterDescriptionStepFinish(description) {
        setState((prevState) => ({
            ...prevState,
            description: description,
        }));

        alert("new post created!")
        props.onClose()
    }

    function handleGoToUploadPhotoStep() {
        setState((prevState) => ({
            ...prevState,
            step: STEPS.UPLOAD_PHOTO,
            image: null,
        }));
    }

    switch (state.step) {
        default:
            throw new Error(`Invalid step: ${state.step}`);

        case STEPS.UPLOAD_PHOTO:
            return (
                <UploadPhotoStep
                    onClose={props.onClose}
                    image={state.image}
                    onStepFinish={handleUploadPhotoStepFinish}
                />
            );

        case STEPS.ENTER_DESCRIPTION:
            return (
                <EnterDescriptionStep
                    image={state.image}
                    onStepFinish={handleEnterDescriptionStepFinish}
                    onGoBack={handleGoToUploadPhotoStep}
                />
            );
    }
}

export default ModalCreate;
