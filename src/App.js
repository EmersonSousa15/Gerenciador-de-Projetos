import Header from './components/Header';
import PageRoutes from './assets/PageRoutes';
import Footer from './components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <PageRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
