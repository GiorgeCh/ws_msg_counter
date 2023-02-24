import './assets/App.css';
import ContextStore from '../modules/ContextStore.js';
import WebsocketModule from '../modules/WebsocketModule.js';
import ConnectionBox from '../components/ConnectionBox.js';
import MessageCounter from '../components/MessageCounter.js';
import styles from '../assets/styles/pages/App.module.css';

function App() {
  return (
    <ContextStore>
      <WebsocketModule>
        <div className={styles.centerWindow}>
          <ConnectionBox></ConnectionBox>
          <MessageCounter></MessageCounter>
        </div>
      </WebsocketModule>
    </ContextStore>
  );
}

export default App;