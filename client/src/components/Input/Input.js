import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './Input.css';

const InfoBar = ({ message, setMessage, sendMessage}) => (
    <form className="form">
        <input 
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        
    </form>

);

export default InfoBar;
