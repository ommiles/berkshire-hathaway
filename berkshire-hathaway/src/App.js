import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faSearch, faClock } from '@fortawesome/free-solid-svg-icons';

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

class App extends Component {

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
      }, this.loadPortal))
      // .then(data => console.log(data))
  }

  userLogin = (user) => {
    fetch('http://localhost:6001/users')
      .then(res => res.json())
      .then(data => this.setState({
        user: data.find(element => element.username === user)
      }, this.loadPortal))
  }

  loadPortal = () => {
    if (this.state.user) {
      // console.log(this.state.user)
      this.props.history.push(`/portal/${this.state.user.username}`)
    } else {
      this.props.history.push('/investors')
    }
  }

  // ! Login Component & Props are here
  loginComponent = () => <Login userCreate={this.userCreate} userLogin={this.userLogin} />

  render() {
    // TODO: Add a 404 page??
      return (
        // <Router>
          <>
            <NavBar />
            <main>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/holdings' component={Holdings} />
              <Route path='/sustainability' component={Sustainability} />
              <Route path='/investors' component={this.loginComponent} />
              <Route path='/news' component={News} />
              {/* <Route exact path='/portal/:username' render={(props) => props.match.params.username === 'Miles' ? <Portal/> : <Redirect to='/investors' />} /> */}
              <Route exact path='/portal/:username' render={(props) => <Portal loggedInUser={this.state.user} />} />
            </main>
            <Footer />
          </>
        // </Router>
      )
  }
}

export default withRouter(App)
