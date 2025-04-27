import React, { useState } from "react";
import './_login.less';
import Input from '../Common/InputField/Input';
import Button from '../Common/Button/Button.jsx';
import { ValidateEmailText, ValidateInputText } from '../Common/Validation/ValidateText.js';
import _ from 'lodash';

const Login = () => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState([{
        fieldName : null,
        errorMessage: null
    }]);

    const getUserName = (userNameValue) => {
        setUserName(userNameValue);
    };

    const getPassword = (passwordValue) => {
        setPassword(passwordValue)
    };

    const onClickButton = (e) => {
        e.preventDefault();
        var setValue = ValidateInputFields(e);
        if(setValue){
            console.log(true);
            //service call to validate the credentials and redirect to the home page.
        }
    };

    const ValidateInputFields = (e) => {
        var validateResponse = ValidateEmailText(userName, 'username');
        if (!_.isEmpty(validateResponse)){
            setErrorMessage({fieldName:'email', errorMessage: validateResponse});
            return false;
        } 

        validateResponse = ValidateInputText(password, 'password');
        if (!_.isEmpty(validateResponse)){
            setErrorMessage({fieldName:'password', errorMessage: validateResponse});
            return false;
        }
        return true;
    }

    return (
        <div id='main-login-id' className='main-login'>
            <div className='title-section text-center'>
                <span className='text-primary'>LOG IN</span>
            </div>
            <div className='username ul-section'>
                <span className='ul-name'>Username</span>
                <Input InputText='email' onInputChange={getUserName}/>
                {
                    errorMessage.fieldName === 'email' && !_.isEmpty(errorMessage.errorMessage) && 
                    <div class="error">
                        ⚠️ Error: {errorMessage.errorMessage}
                    </div>
                }
            </div>
            <div className='password ul-section'>
                <span className='ul-name'>Password</span>
                <Input inputType='password'onInputChange={getPassword}/>
                {
                    errorMessage.fieldName === 'password' && !_.isEmpty(errorMessage.errorMessage) && 
                    <div class="error">
                        ⚠️ Error: {errorMessage.errorMessage}
                    </div>
                }
            </div>
            <div className='ul-button ul-btn-center'>
                <Button onClick={(e) => onClickButton(e)}/>
            </div>
        </div>
    );
};

export default Login;