import React, { Component } from 'react'

export default class Sort extends Component {

    handleSort = (e) => {
        console.log('handleSort running...')
        this.props.sortFunc(e.target.value)
    }

    render() {
        return (
            <div className="">
                <div>
                    <select name="sorts" id="select" className="bn" onChange={this.handleSort}>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="year">Recently Uploaded</option>
                    </select>
                </div>
                {/* <div className='bb b--light-silver mt4' ></div> */}
            </div>
        )
    }
}
