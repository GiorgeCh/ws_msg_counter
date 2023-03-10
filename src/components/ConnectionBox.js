import React from 'react';
import { Container } from '@mui/material';

import styles from '../assets/styles/components/ConnectionBox.module.css';
import { CONTAINER_MAIN } from '../assets/styles/components/ConnectionBox.mui.js';

import { useSocketContext } from '../contexts/SocketContext.js';
import { DEFAULT_SOCKET_URL, DEFAULT_SOCKET_MESSAGE, SOCKET_STATUS_ON, SOCKET_STATUS_OFF, SOCKET_STATUS_CONNECTING, SOCKET_STATUS_CLOSING } from '../constants/socket.js';

const ConnectionBox = () => {
    const { connectionStatus, changeWsStatus, changeUrl, setSendMessage } = useSocketContext();
    let urlInputValue = DEFAULT_SOCKET_URL;
    let msgInputValue = DEFAULT_SOCKET_MESSAGE;

    const onSocketButton = () => {
        if (connectionStatus === SOCKET_STATUS_OFF) {
            changeUrl(urlInputValue);
            changeWsStatus(SOCKET_STATUS_CONNECTING)
        }
        else if (connectionStatus === SOCKET_STATUS_ON) {
            changeWsStatus(SOCKET_STATUS_CLOSING)
        }
    };

    const onMessageButton = () => {
        setSendMessage(msgInputValue);
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
        <Container
            width="100%"
            sx={CONTAINER_MAIN}
        >
            <div className={styles.url_container}>
                <input className={styles.url_input} defaultValue={DEFAULT_SOCKET_URL} type="text" onChange={event => urlInputValue = event.target.value} />
                <button
                    className={styles.url_btn}
                    onClick={onSocketButton}
                    disabled={connectionStatus === SOCKET_STATUS_ON || connectionStatus === SOCKET_STATUS_OFF ? false : true}
                >
                    {
                        connectionStatus === SOCKET_STATUS_ON ? "Stop socket" :
                            connectionStatus === SOCKET_STATUS_OFF ? "Open socket" : "pending"
                    }
                </button>
            </div>
            <div className={styles.msg_container}>
                <label>WS status: {connectionStatus}</label>
                <textarea className={styles.msg_input} type="textarea" defaultValue={DEFAULT_SOCKET_MESSAGE} onChange={event => msgInputValue = event.target.value} />
                <button className={styles.msg_btn} onClick={onMessageButton} disabled={connectionStatus !== SOCKET_STATUS_ON ? true : false}>
                    Send message
                </button>
            </div>
        </Container>

    );
}

export default ConnectionBox;