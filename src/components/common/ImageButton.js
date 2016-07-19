import React, {PropTypes} from 'react';

const ImageButton = ({nameId, imagePath, clickEvent, className}) => {

    return (
        <input
            type="image"
            src={imagePath}
            id={nameId}
            onClick={clickEvent}
            className={className}
        />
    );
};

ImageButton.propTypes = {
    nameId: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    clickEvent: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ImageButton;
