import React, { Component } from "react";
// import Portal from './PortalContainer'

import "./Login.css";

export default class Login extends Component {
  // TODO: Username should be passed to Portal for greeting.
  state = {
    newUsername: '',
    existingUsername: ''
  };

  handleClick = (e) => {
    e.preventDefault()
    if (e.target.name === 'existing') {
      this.props.userLogin(this.state.existingUsername)
    } if (e.target.name === 'new') {
      this.props.userCreate(this.state.newUsername)
    }
  };

  render() {
    // TODO: Shareholder login creates a new state
    return (
      <div className='flex justify-center tc mw6 mt6 mb7 center'>
        <div className='mr5'>
          <header className='flex flex-column items-center justify-center min-vh-75 f3 ph3 pv3 center'>
            <p>Welcome, Shareholder. <br/> Please login below.</p>
            <form 
            name='existing'
            onSubmit={this.handleClick}
            >
              <div className='flex flex-column'>
                <label htmlFor='username'> <b>Username</b> </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  onChange={(e) => this.setState({ existingUsername: e.target.value })} 
                  />
                
                <label htmlFor="psw"> <b>Password</b> </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required />
                
                <button type="submit">Login</button>
                
                <label></label>
                  <input type="checkbox" name="remember" /> Remember me
              </div>

              <div className="container">
                {/* <button type='button' className='cancelbtn' onClick={this.handleClick} >Cancel</button> */}
                
                <span className="psw">
                  Forgot <a href="/">password?</a>
                </span>
              </div>
            </form>
          </header>
        </div>
        <div className='ml5'>
          <header className='flex flex-column items-center justify-center min-vh-75 f3 ph3 pv3 center'>
            <p>Don't have an investor account? <br/> Create one below.</p>
            <form 
              name='new'
              onSubmit={this.handleClick}>
              <div className='flex flex-column'>
                <label htmlFor='username'> <b>New Username</b> </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  onChange={(e) => this.setState({ newUsername: e.target.value })} />
                
                <label htmlFor="psw"> <b>Set a Password</b> </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required />
                
                <button type="submit">Login</button>
                
                <label></label>
                  <input type="checkbox" name="remember" /> Remember me
              </div>

              <div className="container">
                {/* <button type='button' className='cancelbtn' onClick={this.handleClick} >Cancel</button> */}
                
                <span className="psw">
                  Forgot <a href="/">password?</a>
                </span>
              </div>
            </form>
          </header>
        </div>
      </div>
    );
  }
}
