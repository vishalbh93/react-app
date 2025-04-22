import React,  { useState, useEffect } from "react";
import './_photoSection.less';

const PhotoSection = () => {
    const [ manageTabImg, setManageTabImg] = useState('img-a');
    const [cout, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
            switch(manageTabImg){
                case 'img-a':
                    setManageTabImg('img-b');
                    break;
                case 'img-b':
                    setManageTabImg('img-c');
                    break;
                case 'img-c':
                    setManageTabImg('img-a');
                    break;
            }
        }, 1500);
        setCount(0);
        return () => clearTimeout(timer);
    }, [cout, manageTabImg]);
    return (
        <div id='main-id-section' className= {`main-section ${manageTabImg}`}>
            <div className= 'photo-section'>
                <div className='buton-section'>
                    <button className= {`btn-section ${manageTabImg == 'img-a'? 'btn-highlight':''}`} onClick={() => setManageTabImg('img-a')}/>
                    <button className= {`btn-section ${manageTabImg == 'img-b'? 'btn-highlight':''}`} onClick={() => setManageTabImg('img-b')}/>
                    <button className= {`btn-section ${manageTabImg == 'img-c'? 'btn-highlight':''}`} onClick={() => setManageTabImg('img-c')}/>
                </div>
            </div>
        </div>
    );
};

export default PhotoSection;