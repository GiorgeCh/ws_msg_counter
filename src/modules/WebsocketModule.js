import React, { useState, useEffect, useCallback } from 'react';
import { useSocketContext } from '../contexts/SocketContext.js';
import { useMessagesContext } from '../contexts/MessagesContext.js';
import { useCounterContext } from '../contexts/CounterContext.js';
import { SOCKET_STATUS_ON, SOCKET_STATUS_OFF, SOCKET_STATUS_CONNECTING, SOCKET_STATUS_CLOSING } from '../constants/socket.js';

/**
  Handles a websocket connection which is contolled by the useSocketContext 
  TODO: create a Backoff strategy if needed
 */
const WebSocketComponent = (props) => {
  const { connectionStatus, setConnectionStatus, url, wsMsg } = useSocketContext();
  const { setLastMessage } = useMessagesContext();
  const { addToCounter } = useCounterContext();

  const [socket, setSocket] = useState(null);

  //handles toggling of the websocket connection
  useEffect(() => {
    switch (connectionStatus) {
      case SOCKET_STATUS_CONNECTING:
        openSocket();
        break;
      case SOCKET_STATUS_CLOSING:
        closeSocket();
        break;
      default:
        break;
    }

  }, [connectionStatus]);

  //sends a message when wsMsg is set and the websocket conneciton is on
  useEffect(() => {
    if (connectionStatus === SOCKET_STATUS_ON && typeof wsMsg === 'string') {
      socket.send(wsMsg);
    }
  }, [wsMsg]);

  const openSocket = useCallback(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onerror = (err) => {
      console.log("socket error", err);
      closeSocket();
    };

    ws.onopen = () => {
      console.log("socket has opened");
      setConnectionStatus(SOCKET_STATUS_ON);
    };

    ws.onmessage = (msg) => {
      const msgdata = msg.data;
      console.log("socket onmessage", msgdata);
      setLastMessage(msgdata);
      addToCounter();
    };
  });

  const closeSocket = useCallback(() => {
    if (!socket) return;
    console.log("socket is closing");
    socket.close();
    setConnectionStatus(SOCKET_STATUS_OFF);
    setSocket(null);
    console.log("socket has closed");
  });

  return (
    <>
      {props.children}
    </>
  );
}

export default WebSocketComponent;