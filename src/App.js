import './App.css';
import Brand from './components/Brand/Brand';
import Design from './components/Design/Design';
import Footer from './components/Footer/Footer';
import Guidelines from './components/Guidelines/Guidelines';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <LandingPage/>
      <Design/>
      <Brand/>
      <Guidelines/>
      <Footer/>
    </div>
  );
}

export default App;
