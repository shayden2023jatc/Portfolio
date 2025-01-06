import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "motion/react"
import './App.css';
import Home from './pages/Home';
import Service from './pages/Service';
import Leadership from './pages/Leadership';
import Scholarship from './pages/Scholarship';



/*function AnimatedRoutes(){
  const location= useLocation();

  return(
      <AnimatePresence mode="wait">
        <Routes location ={location} key={location.pathname}>
          <Route
            path="/home"
            element={
            <PageWrapper>
              <Home/>
            </PageWrapper>
            }
          />
          <Route
              path="/Service"
              element={
                <PageWrapper>
                  <Service/>
                </PageWrapper>
              }
          />
          <Route
              path="/Leadership"
              element={
                <PageWrapper>
                  <Leadership/>
                </PageWrapper>
              }
          />
          <Route
              path="/Scholarship"
              element={
                <PageWrapper>
                  <Scholarship/>
                </PageWrapper>
              }
          />
        </Routes>
      </AnimatePresence>
  );
}

function PageWrapper({children})
{
  return(
      <motion.div
        initial={{opacity:0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:-20}}
        transition={{duration:2}}
        >{children}
      </motion.div>
  );
}*/


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/Service" element={<Service/>}/>
                  <Route path="/Leadership" element={<Leadership/>}/>
                  <Route path="/Scholarship" element={<Scholarship/>}/>
                  {/* <Route path="*" element={<NoPage />} /> */}
              </Routes>
          </BrowserRouter>
      </div>
  );
}

// let nav = document.getElementById('navigation');
// function toggleMenu() {
//   nav.classList.toggle('navigation--visible');
// }

export default App;
