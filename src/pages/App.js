import React from 'react';
import { Container } from '@mui/material';

import ContextStore from '../modules/ContextStore.js';
import { MuiSkinThemeProvider } from '../assets/themes/MuiTheme.js';

import WebsocketModule from '../modules/WebsocketModule.js';
import ConnectionBox from '../components/ConnectionBox.js';
import MessageCounter from '../components/MessageCounter.js';
import Header from '../components/Header.js';

function App() {

  return (
    <ContextStore>
      <MuiSkinThemeProvider>

        <WebsocketModule />
        <Container
          maxWidth="md"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            border: 1,
            borderColor: 'primary.border',
            padding: '0!important'
          }}
        >
          <Header />
          <ConnectionBox />
          <MessageCounter />
        </Container>

      </MuiSkinThemeProvider>
    </ContextStore>
  );
}

export default App;