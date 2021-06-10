import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MenuBar from './components/menuBar'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Turn from "./pages/Turn";
import TestDrive from "./pages/TestDrive";
import { Container, Button, Header } from "semantic-ui-react";





function App() {
  return (
    <Router>
      <MenuBar></MenuBar>
      <Route exact path="/" component={Home} />
      <Container>
        <Route exact path="/register" component={Register} />
        <Route exact path="/turn" component={Turn} />
        <Route exact path="/testdrive" component={TestDrive} />
      </Container>
    </Router>
  );
}

export default App;
