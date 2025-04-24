import React from "react";
import './_login.less';
import Input from '../Common/InputField/Input';
import Button from '../Common/Button/Button.jsx';

const Login = () => {

    return (
        <div id='main-login-id' className='main-login'>
            <div className='title-section text-center'>
                <span className='text-primary'>LOG IN</span>
            </div>
            <div className='username ul-section'>
                <span className='ul-name'>Username</span>
                <Input/>
            </div>
            <div className='password ul-section'>
                <span className='ul-name'>Password</span>
                <Input/>
            </div>
            <div className='ul-button ul-btn-center'>
                <Button />
            </div>
        </div>
    );
};

export default Login;