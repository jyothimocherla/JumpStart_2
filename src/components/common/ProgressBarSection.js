import React, {PropTypes} from 'react';
import {ProgressBar} from 'react-bootstrap';
import '../../styles/ProgressBarSection.css';

const ProgressBarSection = ({text, now}) => {

    return (
        <div id="progress-bar-container">
            <span>{text}</span>

            <br />

            <ProgressBar
                now={now}
                bsStyle="success"
            />

            <div id="progress-bar-learn-more">
                Learn more about Achievements
            </div>
        </div>
    );
};

ProgressBarSection.propTypes = {
    text: PropTypes.string.isRequired,
    now: PropTypes.number.isRequired
};

export default ProgressBarSection;
