// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
