import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import HighestGood from './Components/Projects/HighestGoodNetwork';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
        path='/' 
        element={<About />}
        />

        <Route 
        path='/HighestGoodNetwork'
        element={<HighestGood />}
        />
      </Routes>
    </Router>
  );
}

export default App;
