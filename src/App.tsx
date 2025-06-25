import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Course from './pages/Course';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { AulasProvider } from './context/AulasContext';
import VisaoGeral from './pages/VisaoGeral';

function App() {
  return (
    <AulasProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s | CyberCode" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/curso"
            element={
              <SidebarProvider>
                <div className="flex h-screen w-screen overflow-hidden">
                  <AppSidebar />
                  <main className="flex-1 min-h-screen bg-[#000000] text-white p-6 overflow-auto">
                    <VisaoGeral />
                  </main>
                </div>
              </SidebarProvider>
            }
          />
          <Route
            path="/curso/:id"
            element={
              <SidebarProvider>
                <div className="flex h-screen w-screen overflow-hidden">
                  <AppSidebar />
                  <main className="flex-1 min-h-screen bg-[#000000] text-white p-6 overflow-auto">
                    <Course />
                  </main>
                </div>
              </SidebarProvider>
            }
          />
        </Routes>
      </HelmetProvider>
    </AulasProvider>
  );
}

export default App;
