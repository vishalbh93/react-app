import React, {useState, useEffect} from "react";
import './_input.less';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import Validation from '../ValidateText.js';

const Input = (props) =>{
    const {
        inputType
      } = props;

    const [inputTextType, setInputTextType] = useState('text');
    
    const OnChangeValue = (event) => {
        event.preventDefault();
        var changeValue = event.target.value;
        props.errorMessage(changeValue);
    };

    useEffect(()=>{
        setInputTextType(inputType);
    },[inputType]);

    return (
        <div id='input-id' className='input-main'>
            <input type={inputTextType} className='ip-section' onChange={(event, value)=>OnChangeValue(event,value)} />
        </div>
    )
};

Input.propTypes = {
    inputType: PropTypes.string
};

Input.defaultProps = {
    inputType: 'text'
};

export default Input;