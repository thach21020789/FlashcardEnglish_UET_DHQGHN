import logo from './logo.svg';
import './App.scss';

import MyComponents from './Example/myComponents.js';
import Test from './Example/Test.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
