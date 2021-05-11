import React, { Component } from 'react'
// import Portal from './PortalContainer'

import './Login.css';

export default class Login extends Component {

    state = {
        // loggedin: null
    }

    loadPortal = () => {
        console.log('portal is loading')
    }

    // TODO: Ask Marc and Zach about React Router Redirect
    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    {/* <img src={logo} className="Login-logo" alt="logo" /> */}
                    <p>
                    {/* Edit <code>src/Login.js</code> and save to reload. */}
                    This is the Login page.
                    </p>
                    <a
                    className="Login-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={this.loadPortal}
                    >
                    This is an a tag.
                    </a>
                </header>
            </div>
        )
    }
}
