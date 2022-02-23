import './App.css';
import LandingPage from './component/LandingPage';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

function App() {

  return (
    <div className="App">
     <LandingPage />
      <About />
      <Portfolio />
      <Contact />
    </div>

  );
}

export default App;
