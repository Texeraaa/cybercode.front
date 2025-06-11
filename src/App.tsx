import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Course from './pages/Course';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | CyberCode" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/curso"
          element={
            <SidebarProvider>
              <div className="flex">
                <AppSidebar />
                <main className="flex-1 p-4">
                  <Course />
                </main>
              </div>
            </SidebarProvider>
          }
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
