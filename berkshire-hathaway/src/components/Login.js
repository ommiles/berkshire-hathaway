import React, { Component } from 'react'
// import Portal from './PortalContainer'

import './Login.css';

export default class Login extends Component {

    // TODO: Username should be passed to Portal for greeting.
    state = {
        username: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(e.target)
        if (e.target.type === 'submit') {
            console.log('submit is firing')
        }
        // console.log('handleclick is firing.')
    }

    // TODO: Ask Marc and Zach about React Router Redirect
    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <p>
                    Welcome, Shareholder.  <br/>
                    Please login below.
                    </p>

                    <form>
                        <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => this.setState({ username: e.target.value })} />
                            <br/>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required /> 
                            <br/>
                            <button type="submit" onClick={this.handleClick} >Login</button>
                            <br/>
                            <label> <input type="checkbox" checked="checked" name="remember"/> Remember me </label>
                        </div>

                        <div class="container">
                            {/* <button type="button" class="cancelbtn" onClick={this.handleClick} >Cancel</button> */}
                            <br/>
                            <span class="psw">Forgot <a href="/">password?</a></span>
                        </div>
                    </form>

                </header>
            </div>
        )
    }
}
