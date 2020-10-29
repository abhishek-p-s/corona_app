import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button} from 'react-bootstrap'
import{
  BrowserRouter as Router,
  Link,
  Switch
} from 'react-router-dom'
import Header from './component/Header'
import India from './component/India'
import World from './component/World'
import State from './component/State'

class App extends Component{
  constructor(){
    super();
  }

  render(){

    return(
      <div className="container-fluid">
        <Router>
          <Header></Header>
          <Switch>
            <Router exact path="/">
              <India></India>

            </Router>
            <Router exact path="/">
              <India></India>
            </Router>
            <Router exact path="/india">
              <India></India>
            </Router>
            <Router exact path="/world">
              <World></World>
            </Router>
            <Router exact path="/state">
              <State></State>
            </Router>
          </Switch>
        </Router>


      </div>
    )
    
}
}


export default App;
