import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Holdings from './components/Holdings';
import Sustainability from './components/Sustainability';
// import CorporateGovernance from './components/CorporateGovernance';
import Login from './components/Login';
import News from './components/News';
import Footer from './components/Footer';
import Portal from './components/PortalContainer';
import './css/app.css'
// import './App.css';

export default class App extends Component {

  state = {

  }
  
  userLogin = (user) => {
    // TODO: find user in database
    fetch('http://localhost:6001/users')
      .then(res => res.json())
      .then(data => console.log(data))
  }


  render() {
      return (
        <Router>
          <div>
            <NavBar />
            {/* <main> */}
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/holdings' component={Holdings} />
              <Route path='/sustainability' component={Sustainability} />
              {/* <Route path='/corporate-governance' component={CorporateGovernance} /> */}
              <Route path='/investors' component={Login} />
              <Route path='/news' component={News} />
              {/* <Route path='/portal' component={Portal} /> */}
              {/* TODO props.match.params.username */}
              {/* Can be a func */}
              {/* <Redirect exact from='/portal' to='/investors' /> */}
              <Route exact path='/portal/:username' render={(props) => props.match.params.username === 'Miles' ? <Portal/> : <Redirect to='/investors' />} 
              />
              {/* TODO add a 404 <Route /> */}
            {/* </main> */}
            <Footer />
          </div>
        </Router>
      )
  }
}

// export default App
