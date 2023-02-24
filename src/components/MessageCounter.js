import React from 'react';
import styles from '../assets/styles/components/ConnectionBox.module.css';
import { useMessagesContext } from '../contexts/MessagesContext.js';
import { useCounterContext } from '../contexts/CounterContext.js';

const ConnectionBox = () => {
    const { lastMessage } = useMessagesContext();
    const { counter } = useCounterContext();

    /**
      components:
        1. counter
        2. last message
     */

    return (
        <div className={styles.container}>
            <label className={styles.counter}>{counter}</label>
            <label>{lastMessage}</label>
        </div>
    );
}

export default ConnectionBox;