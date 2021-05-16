import React, { Component } from 'react';

import NavBar from './NavBar'
import HoldingsList from './HoldingsList'

export default class HoldingsContainer extends Component {

    state = {
        holdings: []
    }

    componentDidMount() {
        fetch("http://localhost:6001/holdings")
            .then((res) => res.json())
            .then((holdings) =>
                this.setState({
                    holdings: holdings.sort((a, b) => a.filename < b.filename ? -1 : 1 )
                })
            );
    }

    render() {
        return (
            <div>
                <NavBar />
                {/* <h1 className="ma4 f1">Berkshire Hathaway Holdings:</h1> */}
                <h2 className="baskerville fw1 ph3 ph0-l mw7 center">Berkshire Hathaway Holdings</h2>
                <div className="bt b--black-10 mw7 center"></div>
                <HoldingsList holdings={this.state.holdings} />
                
                
            </div>
        )
    }
}
