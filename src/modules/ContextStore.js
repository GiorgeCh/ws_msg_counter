import React from "react";

import { CounterContextProvider } from "../contexts/CounterContext";
import { MessagesContextProvider } from "../contexts/MessagesContext";
import { SocketContextProvider } from "../contexts/SocketContext";

const ContextStore = ({ children }) => {
  return (
    <CounterContextProvider>
      <MessagesContextProvider>
        <SocketContextProvider>
          {children}
        </SocketContextProvider>
      </MessagesContextProvider>
    </CounterContextProvider>
  );
};

export default ContextStore;