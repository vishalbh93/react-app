import React,  { useState } from "react";
import './_photoSection.less';

const PhotoSection = () => {
    const [ manageTabImg, setManageTabImg] = useState('img-a');

    const onChangeImage = (value) =>{
        switch(value)
        {
            case '1':
                setManageTabImg('img-a');
                break;
            case '2':
                setManageTabImg('img-b');
                break;
            case '3':
                setManageTabImg('img-c');
                break;
            default:
                setManageTabImg('img-a')
        }
    };

    return (
        <div id='main-id-section' className= {`main-section ${manageTabImg}`}>
            <div className= 'photo-section'>
                <div className='buton-section'>
                    <button className= {`btn-section ${manageTabImg == 'img-a'? 'btn-highlight':''}`} onClick={() => onChangeImage('1')}/>
                    <button className= {`btn-section ${manageTabImg == 'img-b'? 'btn-highlight':''}`} onClick={() => onChangeImage('2')}/>
                    <button className= {`btn-section ${manageTabImg == 'img-c'? 'btn-highlight':''}`} onClick={() => onChangeImage('3')}/>
                </div>
            </div>
        </div>
    );
};

export default PhotoSection;