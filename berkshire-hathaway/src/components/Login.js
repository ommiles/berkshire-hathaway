import React, { Component } from 'react'

import './Login.css';

export default class Login extends Component {
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
                    >
                    This is an a tag.
                    </a>
                </header>
            </div>
        )
    }
}
