import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | CyberCode" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
