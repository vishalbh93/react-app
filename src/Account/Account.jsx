import React from "react";
import './_account.less';
import PhotoSection from "./PhotoSection";
import Login from './Login';
const Account = () => {

    return (
        <div id='account-id' className='main-account'>
            <div className='account-model'>
                <div className='mmodel-inner-section'>
                    <PhotoSection/>
                    <div className='login-rg'>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;