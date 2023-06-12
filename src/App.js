import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'/*Scroll back to top */
  }, []); 
  return (
    <div className="App">
      
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
