import React, { useState, createContext, useContext } from 'react';

export const MessagesContext = createContext();

export const MessagesContextProvider = (props) => {
  const [lastMessage, setLastMessage] = useState("");

  return (
    <MessagesContext.Provider value={{ lastMessage, setLastMessage }}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
