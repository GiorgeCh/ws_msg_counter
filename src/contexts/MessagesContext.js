import React, { useState, createContext, useContext, useCallback } from 'react';

export const MessagesContext = createContext();

export const MessagesContextProvider = (props) => {
  const [lastMessage, setLastMessage] = useState("");

  const changeLastMessage = useCallback((message) => {
    if(message) setLastMessage(message);
  })

  return (
    <MessagesContext.Provider value={{ lastMessage, changeLastMessage }}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
