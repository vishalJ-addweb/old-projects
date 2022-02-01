import React from 'react';
import Navbar from './components/common/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import Home from './components/common/Home';
// import EditUser from './components/users/EditUser';

function App() {


  // const editData=(data)=>{
  //   setUserId(data.id);
  // }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
