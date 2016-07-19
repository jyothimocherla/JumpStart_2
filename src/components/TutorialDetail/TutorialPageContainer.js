import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TutorialDetailPage from './TutorialDetailPage';

class TutorialPageContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <TutorialDetailPage
                progress={60}
            />
        );
    }
}

TutorialPageContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialPageContainer);
