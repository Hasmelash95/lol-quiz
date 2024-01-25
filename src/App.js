import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Certificate } from './pages/Certificate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
