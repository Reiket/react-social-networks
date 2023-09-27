import React from 'react';
import s from './../Dialogs.module.css';
const Message = ({message}) => {

    return (
        <div>
            <div className= {s.message}>{message}</div>
        </div>
        
    );
}


export default Message;
