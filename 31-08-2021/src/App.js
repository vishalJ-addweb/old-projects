// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import User from './components/User';
import ErrorPage from './components/ErrorPage';

function App() {

  const Name = () => {
    return <h1>Hello I am a Name Page.</h1>
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={() => <Home name='Home'/> } />
        <Route exact path='/service' render={() => <Service name='Servicess'/> } />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/Name' component={Name} />
        <Route exact path='/user/:fname/:lname' component={User} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
