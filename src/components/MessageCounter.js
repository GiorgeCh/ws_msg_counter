import React from 'react';
import { Container } from '@mui/material';

import styles from '../assets/styles/components/MessageCounter.module.css';
import { CONTAINER_MAIN, CONTAINER_MESSAGE } from '../assets/styles/components/MessageCounter.mui.js';

import { useMessagesContext } from '../contexts/MessagesContext.js';
import { useCounterContext } from '../contexts/CounterContext.js';

const MessageCounter = () => {
    const { lastMessage } = useMessagesContext();
    const { counter } = useCounterContext();

    /**
      components:
        1. counter
        2. last message
     */

    return (
        <Container sx={CONTAINER_MAIN}>
            <label className={styles.counter}>Message Counter: {counter}</label>
            <Container sx={CONTAINER_MESSAGE}>
                <label>{lastMessage}</label>
            </Container>
        </Container>

    );
}

export default MessageCounter;