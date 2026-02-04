import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ArtPage from './pages/ArtPage';
import BrandPage from './pages/BrandPage';
import BrandProjectPage from './pages/BrandProjectPage';
import './App.css';

function App() {
  return (
    <main>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/brand/:slug" element={<BrandProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
