import './App.css';
import Navbar from './Static/Navbar';
import MiddleSection from './Static/MiddleSection';
import Footer from './Static/Footer';
import Routes from './Static/Routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
      {/* <MiddleSection/> */}
      <Footer/>      
    </div>
  );
}

export default App;
