import React, { useState } from 'react';
import { useSocketContext } from '../contexts/SocketContext';
import { useMessagesContext } from '../contexts/MessagesContext';
import { useCounterContext } from '../contexts/CounterContext';
import { SOCKET_STATUS_ON, SOCKET_STATUS_OFF, SOCKET_STATUS_CONNECTING, SOCKET_STATUS_CLOSING } from '../constants/socket';


const WebSocketComponent = (props) => {
  const { connectionStatus, setConnectionStatus, url, wsMsg } = useSocketContext();
  const { setLastMessage } = useMessagesContext();
  const { counter, setCounter } = useCounterContext();

  const [socket, setSocket] = useState(null);

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

  useEffect(() => {
    if (connectionStatus === SOCKET_STATUS_ON && typeof wsMsg === 'string') {
      socket.send(wsMsg);
    }
  }, [wsMsg]);

  const openSocket = () => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onopen = () => {
      console.log("socket has opened");
      setConnectionStatus(SOCKET_STATUS_ON);
    };

    ws.onmessage = (msg) => {
      const msgdata = JSON.parse(msg.data);
      console.log("socket onmessage", msgdata);
      setLastMessage(msgdata);
      setCounter(counter++);
    };
  };

  const closeSocket = () => {
    console.log("socket is closing");
    socket.close();
    setConnectionStatus(SOCKET_STATUS_OFF);
    setSocket(null);
    console.log("socket has closed");
  };

  return (
    <div>
      {props.children}
    </div>
  );
}


export default WebSocketComponent;