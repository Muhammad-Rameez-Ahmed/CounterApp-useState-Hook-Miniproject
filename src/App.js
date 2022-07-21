import logo from './logo.svg';
import './App.css';
import CounterApp from './Components.jsx/CounterApp';
import Navbar from './Components.jsx/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CounterApp/>
    </div>
  );
}

export default App;
