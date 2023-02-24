import React, { useState, createContext, useContext } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
