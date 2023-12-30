import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import HomePage from './components/Home';
import Dashboard from './components/Dashboard';
import Gestion from './components/Gestion';

import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link to="/">Inicio</Link> - 
            <Link to="/dashboard">Dashboard</Link> - 
            <Link to="/gestion">Gestion</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gestion" element={<Gestion />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;