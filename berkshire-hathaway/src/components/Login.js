import React, { Component } from "react";
// import Portal from './PortalContainer'

import "./Login.css";

export default class Login extends Component {
  // TODO: Username should be passed to Portal for greeting.
  state = {
    username: "",
  };

  handleClick = (e) => {
    e.preventDefault()
    this.props.userLogin(this.state.username)
  };

  render() {

    // const { userLogin } = this.props

    // handleClick = (e) => {
    //   e.preventDefault()
    //   userLogin(this.state.username)
    // };

    return (
      <div className='flex justify-center tc mw6 mt6 mb7 center'>
        <header className='flex flex-column items-center justify-center min-vh-75 f3 ph3 pv3 center'>
          <p>Welcome, Shareholder. <br/> Please login below.</p>
          <form 
          // onSubmit={this.handleClick}
          >
            <div className='flex flex-column'>
              <label htmlFor='username'> <b>Username</b> </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                // onChange={(e) => this.setState({ username: e.target.value })} 
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
        <header className='flex flex-column items-center justify-center min-vh-75 f3 ph3 pv3 center'>
          <p>Don't have an account? <br/> Create one below.</p>
          <form onSubmit={this.handleClick}>
            <div className='flex flex-column'>
              <label htmlFor='username'> <b>Username</b> </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                onChange={(e) => this.setState({ username: e.target.value })} />
              
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
    );
  }
}
