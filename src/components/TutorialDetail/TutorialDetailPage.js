import React, {PropTypes} from 'react';

const TutorialDetailPage = ({progress}) => {
    return (
        <h1>Page</h1>
    );
};

TutorialDetailPage.propTypes = {
    progress: PropTypes.number.isRequired
};

export default TutorialDetailPage;
