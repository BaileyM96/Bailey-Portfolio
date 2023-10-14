import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
      </header>
    </div>
  );
}

export default App;
