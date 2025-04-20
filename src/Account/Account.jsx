import React from "react";
import './_account.less';
import PhotoSection from "./PhotoSection";
const Account = () => {

return (
    <div id='account-id' className='main-account'>
        <div className='account-model'>
            <div className='mmodel-inner-section'>
                <PhotoSection/>
            </div>
        </div>
    </div>
);
}

export default Account;