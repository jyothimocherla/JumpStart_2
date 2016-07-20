import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LogoButton from './ImageButton';
import Login from './Login';
import '../../styles/Header.css';
import {Link} from 'react-router';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToHome = this.redirectToHome.bind(this);
        this.login = this.login.bind(this);
    }

    redirectToHome(event) {
        event.preventDefault();
        this.context.router.push('/');
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

                <div id="header-support-text">
                    <span>24/7 Support (480) 260-8877</span>
                </div>

                <div id="header-help-text">
                    <span>Help</span>
                </div>

                <Login
                    nameId="login-container"
                    onLogin={this.login}
                />

                <div id="header-checkout-text">
                    <span>Checkout Now</span>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    //myProp: PropTypes.string.isRequired
};

Header.contextTypes = {
    router: PropTypes.object.isRequired
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
