import React from 'react';
import { Container } from '@mui/material';

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
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'primary.main',
                minHeight: '300px'
            }}
        >
            <label className={styles.counter}>Message Counter: {counter}</label>
            <label>Last Message:<br/>{lastMessage}</label>
        </Container>

    );
}

export default ConnectionBox;