import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import './assets/css/fonts.css';
import Home from './pages/Home';
import Energies from './pages/Energies';
import Wind from './pages/Wind';
import Solar from './pages/Solar';
import Geo from './pages/Geo';
import Bio from './pages/Bio';
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Energies" element={<Energies />} />
          <Route path="/Wind" element={<Wind />} />
          <Route path="/Solar" element={<Solar />} />
          <Route path="/Geo" element={<Geo />} />
          <Route path="/Bio" element={<Bio />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

// let nav = document.getElementById('navigation');
// function toggleMenu() {
//   nav.classList.toggle('navigation--visible');
// }

export default App;
