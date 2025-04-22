import React from "react";
import './_login.less';

const Login = () => {

    return (
        <div id='main-login-id' className='main-login'>
            <div className='title-name'>
                <span className='title-l1'>LOG IN</span>
            </div>
            <div className='username-section'>
                    <span className='user-name'>Username</span>
                    <input type='text' className='user-ip' />
            </div>
        </div>
    );
};

export default Login;