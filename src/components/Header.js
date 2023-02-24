import React from 'react';
import styles from '../assets/styles/components/Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header_text}>WS message counter</h1>
        </div>
    );
}

export default Header;