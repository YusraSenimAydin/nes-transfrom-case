import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Selects1 from './pages/Selects1';
import Selects2 from './pages/Selects2';
import Selects3 from './pages/Selects3';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selects1" element={<Selects1 />} />
        <Route path="/selects2" element={<Selects2 />} />
        <Route path="/selects3" element={<Selects3 />} />
      </Routes>
    </Router>
  );
};

export default App;
