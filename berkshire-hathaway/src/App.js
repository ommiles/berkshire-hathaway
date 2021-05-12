import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Holdings from './components/Holdings';
import Sustainability from './components/Sustainability';
import Login from './components/Login';
import News from './components/News';
import Footer from './components/Footer';
import Portal from './components/PortalContainer';
import './css/app.css'

export default class App extends Component {

  state = {
    user: {}
  }
  
  userCreate = (user) => {
    let newUser = {
      username: user,
      bookmarks: []
    }
    let configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, body: JSON.stringify(newUser)
    }
    fetch('http://localhost:6001/users', configObj)
      .then(res => res.json())
      .then(data => this.setState({
        user: data
      }))
      // .then(data => console.log(data))
  }

  userLogin = (user) => {
    // fetch
    // find
    // set state new object
    fetch('http://localhost:6001/users')
      .then(res => res.json())
      .then(data => this.setState({
        user: data.find(element => element.username === user)
      }))
    console.log(user)
    console.log('userLogin is firing.')
  }

  loadPortal = (user) => {
    // TODO: find user in users array in db
    // TODO: Retrieve their bookmarked files
    // TODO: Set state for portal container to user
    // TODO: Redirect to Portal
  }

  // ! Login Component & Props are here
  loginComponent = () => <Login userCreate={this.userCreate} userLogin={this.userLogin} />

  render() {
    // TODO: Add a 404 page??
      return (
        <Router>
          <div>
            <NavBar />
            <main>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/holdings' component={Holdings} />
              <Route path='/sustainability' component={Sustainability} />
              <Route path='/investors' component={this.loginComponent} />
              <Route path='/news' component={News} />
              <Route exact path='/portal/:username' render={(props) => props.match.params.username === 'Miles' ? <Portal/> : <Redirect to='/investors' />} />
            </main>
            <Footer />
          </div>
        </Router>
      )
  }
}

// export default App
