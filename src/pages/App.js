import React from 'react';

import ContextStore from '../modules/ContextStore.js';
import styles from '../assets/styles/pages/App.module.css';

import WebsocketModule from '../modules/WebsocketModule.js';
import ConnectionBox from '../components/ConnectionBox.js';
import MessageCounter from '../components/MessageCounter.js';
import Header from '../components/Header.js';

function App() {

  return (
    <ContextStore>
      <WebsocketModule/>
      <div className={styles.centerWindow}>
        <Header/>
        <ConnectionBox/>
        <MessageCounter/>
      </div>
    </ContextStore>
  );
}

export default App;