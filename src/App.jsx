import { Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import './index.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
