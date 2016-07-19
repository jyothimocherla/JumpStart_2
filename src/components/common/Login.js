import React, {PropTypes} from 'react';

// Create the html and css(Header.css) to display the dropdown login prompt
// When the user clicks the login button, call the onLogin(email, password) function

const Login = ({nameId, onLogin}) => {

    return (
        <div id={nameId}>
            <span>Login</span>
        </div>
    );
};

Login.propTypes = {
    nameId: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default Login;
