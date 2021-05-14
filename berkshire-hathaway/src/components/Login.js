import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import "./Login.css";

const google = <FontAwesomeIcon icon={faGoogle} />

export default class Login extends Component {
  // TODO: Username should be passed to Portal for greeting.
  state = {
    newUsername: "",
    existingUsername: "",
    newPass: '',
    existingPass: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "existing") {
      this.props.userLogin(this.state.existingUsername);
    }
    if (e.target.name === "new") {
      this.props.userCreate(this.state.newUsername);
    }
    this.setState({ 
      newUsername: "",
      existingUsername: "",
      newPass: '',
    existingPass: ''
    })
  };

  render() {
    // TODO: Shareholder login creates a new state
    return (
      <div className="flex flex-column flex-row-l justify-center mt5 mb7 center ba bw4 br2 b--dark-blue bg-light-gray login-container shadow">
          <header className="flex flex-column f3 pa3 self-center">
            <p className="tc mt5">Welcome, Shareholder.</p>
            <form name="existing" onSubmit={this.handleSubmit}>
              <div className="flex flex-column">
                <button className="pa2 mt3 mb1 b ba b--silver br3 google">
                  {google} Login with Google
                </button>
                <small className="tc mt1 mb2" >or Login below:</small>
                  <label htmlFor="username" className="pv1 mb0 mt2">
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    className="pa1 mb3 mt0"
                    value={this.state.existingUsername}
                    onChange={(e) =>
                      this.setState({ existingUsername: e.target.value })
                    }
                  />
                  <label htmlFor="psw" className="pv1 mb0 mt2">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    className="pv1 mb3 mt0"
                    value={this.state.existingPass}
                    onChange={(e) =>
                      this.setState({ existingPass: e.target.value })
                    }
                  />
                  <button type="submit" className="pa2 mv3 white b bw2 br3 bg-blue bn">Login</button>
                  <div className="tc">
                    <input type="checkbox" name="remember" className="ma3" />
                    <label type="checkbox" className="" >Remember Me</label>
                  </div>
                </div>
              </form>
            <span className="tc mb4">
              <a href="/" >Forgot Password?</a>
            </span>
          </header>
          <div className="br bw1 b--silver self-center mh5 line"></div>
          <header className="flex flex-column f3 pa3 self-center">
            <p className="tc mt0 mb1">Don't have an investor account?</p>
            <p className="tc mt1 mb4">Create one below.</p>
            <form name="new" onSubmit={this.handleSubmit}>
              <div className="flex flex-column">
                <small className="tc mb3" >You'll be redirected to your account immediately.</small>
                  <label htmlFor="username" className="pv1 mb0 mt2">
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    className="pa1 mb3 mt0"
                    value={this.state.newUsername}
                    onChange={(e) =>
                      this.setState({ 
                        newUsername: e.target.value
                      })
                    }
                  />
                  <label htmlFor="psw" className="pv1 mb0 mt2">
                    <b>Set a Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    className="pv1 mb3 mt0"
                    value={this.state.newPass}
                    onChange={(e) =>
                      this.setState({ 
                        newPass: e.target.value
                      })
                    }
                  />
                  <button type="submit" className="pa2 mv3 white b bw2 br3 bg-blue bn">Login</button>
                  <div className="tc">
                    <input type="checkbox" name="remember" className="ma3" />
                    <label type="checkbox" className="" >Remember Me</label>
                  </div>
                </div>
              </form>
          </header>
      </div>
    );
  }
}
