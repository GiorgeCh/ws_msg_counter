import React from 'react';
import styles from '../assets/styles/components/ConnectionBox.module.css';
import { useSocketContext } from '../contexts/SocketContext';
import { DEFAULT_SOCKET_URL, DEFAULT_SOCKET_MESSAGE, SOCKET_STATUS_ON, SOCKET_STATUS_OFF, SOCKET_STATUS_CONNECTING, SOCKET_STATUS_CLOSING } from '../constants/socket';

const ConnectionBox = () => {
    const { connectionStatus, setConnectionStatus, setUrl, setWsMsg } = useSocketContext();
    let urlInputValue = DEFAULT_SOCKET_URL;
    let msgInputValue = DEFAULT_SOCKET_MESSAGE;

    const onSocketButton = () => {
        if(connectionStatus == SOCKET_STATUS_ON){
            setUrl(urlInputValue);
            setConnectionStatus(SOCKET_STATUS_CONNECTING)
        }
        else if(connectionStatus == SOCKET_STATUS_OFF){
            setConnectionStatus(SOCKET_STATUS_CLOSING)
        }
    };

    const onMessageButton = () => {
        setWsMsg(msgInputValue);
    };

    /**
      components:
        1. url input
        2. connect ws button
        3. socket status 
        4. message input
        5. send message button
     */

    return (
        <div className={styles.container}>
            <input value={DEFAULT_SOCKET_URL} type="text" onChange={event => urlInputValue = event.target.value} />
            <button onClick={onSocketButton} disabled={connectionStatus == SOCKET_STATUS_OFF ? true : false}>
                {
                    connectionStatus == SOCKET_STATUS_ON ? "Stop socket" :
                        connectionStatus == SOCKET_STATUS_OFF ? "Open socket" : "pending"
                }
            </button>
            <label>{connectionStatus}</label>
            <input type="textarea" onChange={event => msgInputValue = event.target.value} />
            <button onClick={onMessageButton} disabled={connectionStatus == SOCKET_STATUS_ON ? true : false}>
                Send message
            </button>
        </div>
    );
}

export default ConnectionBox;