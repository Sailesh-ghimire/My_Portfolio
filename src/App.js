import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import { About } from "./pages/About";
import { Contact } from "./components/Contact";
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Home mode={mode} toggleMode={toggleMode} />
      <About mode={mode} toggleMode={toggleMode} />
      <Skills mode={mode} toggleMode={toggleMode} />
      <Projects mode={mode} toggleMode={toggleMode} />
      <Contact mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
