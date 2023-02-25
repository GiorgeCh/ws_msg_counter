import React from 'react';
import { Container } from '@mui/material';

import styles from '../assets/styles/components/Header.module.css';

const Header = () => {
    return (
        <Container
            width="100%"
            sx={{
                height: '50px',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                bgcolor: 'primary.dark'
            }}
        >
            <h1 className={styles.header_text}>WS message counter</h1>
        </Container>
    );
}

export default Header;