import React from "react";
import './_button.less';

const Button = (props) => {
    const onClickButton = (event) => {
        event.preventDefault();
        props.onClick(event);
    };

    return (
        <div id='button-id' className='button-class'>
            <button className='btn-sec text-center' onClick={(e) => onClickButton(e)}> Login </button>
        </div>
    );
};

export default Button;