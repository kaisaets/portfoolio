import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <div id='home' />
      <Navbar />      
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
