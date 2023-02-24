import React, { useState, createContext, useContext } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const addToCounter = (amount = 1) => {
    setCounter((prev) => prev + amount)
  }

  console.log('------- CounterContextProvider rendered')


  return (
    <CounterContext.Provider value={{ counter, addToCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
