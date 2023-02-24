import React, { useState, createContext, useContext } from 'react';

export const SocketContext = createContext();

export const SocketContextProvider = (props) => {
  const [connectionStatus, setConnectionStatus] = useState("");
  const [url, setUrl] = useState("");
  const [wsMsg, setWsMsg] = useState(null);

  return (
    <SocketContext.Provider value={{ connectionStatus, setConnectionStatus, url, setUrl, wsMsg, setWsMsg }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => useContext(SocketContext);
