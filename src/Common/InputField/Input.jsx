 import React, {useState} from "react";
import './_input.less';

 const Input = () =>{
    const [inputValue, setInputValue] = useState(null);

    const OnChangeValue = (event, changevalue) => {
        event.preventDefault();
        setInputValue(changevalue);
    };

    return (
        <div id='input-id' className='input-main'>
            <input type='text' className='ip-section' onChange={(event, value)=>OnChangeValue(event,value)} value={inputValue} />
        </div>
    )
 };

 export default Input;