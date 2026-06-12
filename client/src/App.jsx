import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;