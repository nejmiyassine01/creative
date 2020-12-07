import './App.css';
import Brand from './components/Brand/Brand';
import Design from './components/Design/Design';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <LandingPage/>
      <Design/>
      <Brand/>
    </div>
  );
}

export default App;
