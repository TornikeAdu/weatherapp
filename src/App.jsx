import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import AppRoutes from './routes';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
