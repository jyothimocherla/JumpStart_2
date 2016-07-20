import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WatchVideoPage from './WatchVideoPage';
import ModalView from '../ModalView/ModalView';

class WatchVideoPageContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setState({open: false});
    }

    openModal() {
        console.log('open');
        this.setState({open: true});
    }

    closeModal () {
        console.log('close');
        this.setState({open: false});
    }

    render() {

        return (
            <div>
                <WatchVideoPage
                    openModal={this.openModal}
                />
                <ModalView
                    isOpen={this.state.open}
                    closeModal={this.closeModal}
                />
            </div>
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
