import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import './App.css';

function App() {
  return (
    <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
