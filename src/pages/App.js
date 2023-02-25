import React from 'react';
import { Container } from '@mui/material';

import ContextStore from '../modules/ContextStore.js';
import { MuiSkinThemeProvider } from '../assets/themes/MuiTheme.js';
import { CONTAINER_MAIN } from '../assets/styles/pages/App.mui.js';

import WebsocketModule from '../modules/WebsocketModule.js';
import ConnectionBox from '../components/ConnectionBox.js';
import MessageCounter from '../components/MessageCounter.js';
import Header from '../components/Header.js';

function App() {

  return (
    <ContextStore>
      <MuiSkinThemeProvider>
        <WebsocketModule />
        <Container maxWidth="md" sx={CONTAINER_MAIN}>
          <Header />
          <ConnectionBox />
          <MessageCounter />
        </Container>

      </MuiSkinThemeProvider>
    </ContextStore>
  );
}

export default App;