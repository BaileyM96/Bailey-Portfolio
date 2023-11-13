import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
        path='/' 
        element={<About />}
        />
      </Routes>
    </Router>
  );
}

export default App;
