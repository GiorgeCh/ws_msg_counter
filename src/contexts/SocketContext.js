import React, { useState, createContext, useContext, useCallback } from 'react';
import { SOCKET_STATUS_ON, SOCKET_STATUS_OFF, SOCKET_STATUS_CONNECTING, SOCKET_STATUS_CLOSING } from '../constants/socket.js';

export const SocketContext = createContext();

export const SocketContextProvider = (props) => {
  const [connectionStatus, setConnectionStatus] = useState(SOCKET_STATUS_OFF);
  const [url, setUrl] = useState("");
  const [wsMsg, setWsMsg] = useState(null);

  const changeUrl = useCallback((input) => {
    if (input) setUrl(input);
  })

  const setSendMessage = useCallback((input = '') => {
    setWsMsg(input);
  })

  const changeWsStatus = useCallback((status) => {
    switch (status) {
      case SOCKET_STATUS_ON:
        setConnectionStatus(SOCKET_STATUS_ON);
        break;
      case SOCKET_STATUS_OFF:
        setConnectionStatus(SOCKET_STATUS_OFF);
        break;
      case SOCKET_STATUS_CONNECTING:
        setConnectionStatus(SOCKET_STATUS_CONNECTING);
        break;
      case SOCKET_STATUS_CLOSING:
        setConnectionStatus(SOCKET_STATUS_CLOSING);
        break;
      default:
        break;
    }
  })

  return (
    <SocketContext.Provider value={{ connectionStatus, url, wsMsg, changeUrl, setSendMessage, changeWsStatus }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
