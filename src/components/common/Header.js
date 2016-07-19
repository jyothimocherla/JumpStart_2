import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LogoButton from './ImageButton';
import Login from './Login';
import '../../styles/Header.css';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToHome = this.redirectToHome.bind(this);
        this.login = this.login.bind(this);
    }

    redirectToHome() {
        console.log('suhh');
    }

    login(email, password) {
        console.log('login');
    }

    render() {

        return (
            <div id="header">
                <div id="logo-button-container">
                    <LogoButton
                        nameId="logo-button"
                        imagePath={require('../../../imgs/godaddy-logo.png')}
                        clickEvent={this.redirectToHome}
                    />
                </div>

                <Login
                    nameId="login-container"
                    onLogin={this.login}
                />
            </div>
        );
    }
}

Header.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
