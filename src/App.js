import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message';
const name = "Max"
function App() {
  const mesageLabel = "MESSAGE";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>Hi {name}</h3>
        <message title={mesageLabel} anyProp={new message} />
      </header>
    </div>
  );
}

export default App;
