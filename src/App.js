// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Udomljavanje from './components/Udomljavanje';
import NotFound from './components/NotFound';
import DodajPsa from './components/DodajPsa';

function App() {
  const appStyle = {
    background: 'linear-gradient(to bottom, #F5F5F5, #FFFFFF, #68D89B)',
    minHeight: '100vh',
  };

  return (
    <AuthProvider>
      <Router>
        <div style={appStyle}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path='/udomljavanje' element={<Udomljavanje/>} />
            <Route path='/udomljavanje/dodaj' element={<DodajPsa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;
