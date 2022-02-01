// import './App.css';
import Navbar from './components/Navbar.js';
import MultiForm from './components/MultiForm.js';
// const { Router } = require("react-router-dom");

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar RandomText="Validation Form" />
      </Router>
      <MultiForm />
    </>
  );
}

export default App;
