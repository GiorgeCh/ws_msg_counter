import React from 'react';
import styles from '../assets/styles/components/ConnectionBox.module.css';
import { useMessagesContext } from '../contexts/MessagesContext';
import { useCounterContext } from '../contexts/CounterContext';

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
            <label>{counter}</label>
            <label>{lastMessage}</label>
        </div>
    );
}

export default ConnectionBox;