import React, { useState } from "react";
import './_login.less';
import Input from '../Common/InputField/Input';
import Button from '../Common/Button/Button.jsx';
import { ValidateInputText } from '../Common/Validation/ValidateText.js';

const Login = () => {

    const [userName,setUserName] = useState(null);
    const onShowErrorMessage = (textDetails) => {
        setUserName(textDetails);
    }

    const onClickButton = () => {
        const validationResponse = ValidateInputText(userName);
        console.log(validationResponse);
    };

    return (
        <div id='main-login-id' className='main-login'>
            <div className='title-section text-center'>
                <span className='text-primary'>LOG IN</span>
            </div>
            <div className='username ul-section'>
                <span className='ul-name'>Username</span>
                <Input InputText='email' errorMessage={onShowErrorMessage}/>
            </div>
            <div className='password ul-section'>
                <span className='ul-name'>Password</span>
                <Input inputType='password'errorMessage={onShowErrorMessage}/>
            </div>
            <div className='ul-button ul-btn-center'>
                <Button onClick={onClickButton}/>
            </div>
        </div>
    );
};

export default Login;