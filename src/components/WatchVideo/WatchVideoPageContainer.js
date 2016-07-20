import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WatchVideoPage from './WatchVideoPage';

class WatchVideoPageContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <WatchVideoPage/>
        );
    }
}

WatchVideoPageContainer.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchVideoPageContainer);
