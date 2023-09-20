// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import {About  } from "./pages/About";
import {Contact  } from "./components/Contact";

import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light");

const toggleMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    // document.body.style.backgroundColor='black';
  }
  else{
    setMode('light');
    // document.body.style.backgroundColor='white';

  }
}

  return (
    <div className="App">
      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path = "/" element ={<Home mode={mode} toggleMode={toggleMode}/>}/>
          <Route path = "/projects" element ={<Projects mode={mode} toggleMode={toggleMode}/>}/>
          <Route path= "/project/:id" element={<ProjectDisplay mode={mode} toggleMode={toggleMode}/>}/>
          <Route path = "/skills" element ={<Skills mode={mode} toggleMode={toggleMode}/>}/>

        </Routes>
        
      </Router> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Home mode={mode} toggleMode={toggleMode}/>
      <About mode={mode} toggleMode={toggleMode} />
      <Skills mode={mode} toggleMode={toggleMode} />
      <Projects mode={mode} toggleMode={toggleMode}/>
      <Contact mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode}/>
    
    </div>
  );
}

export default App;
