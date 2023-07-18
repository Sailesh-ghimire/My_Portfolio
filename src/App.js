// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
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
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path = "/" element ={<Home mode={mode} toggleMode={toggleMode}/>}/>
          <Route path = "/projects" element ={<Projects mode={mode} toggleMode={toggleMode}/>}/>
          <Route path= "/project/:id" element={<ProjectDisplay mode={mode} toggleMode={toggleMode}/>}/>
          <Route path = "/experience" element ={<Experience mode={mode} toggleMode={toggleMode}/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
