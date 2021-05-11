import React, { Component } from 'react'
import FilesList from './FilesList'
import Search from './Search'

export default class Portal extends Component {

    state = {
        files: [],
        filteredFiles: []
    }

    componentDidMount() {
        fetch('http://localhost:6001/corporate-governance-files')
            .then(res => res.json())
            .then(files => this.setState({ 
                files: files,
                filteredFiles: files
            }))
    }

    searchFunc = (e) => {
        let filteredAllFiles
        e.target.value.length ? (filteredAllFiles = this.state.files.filter(file => file.filename.toLowerCase().includes(e.target.value.toLowerCase()))) : (filteredAllFiles = this.state.files)

        this.setState({
            filteredFiles: filteredAllFiles
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome, John</h1>
                <Search search={this.searchFunc} />
                <div style={{display: 'flex'}}>
                    {/* <Search search={search} /> */}
                    {/* <AddTransactionForm updateTransactions={updateTransactions} /> */}
                    {/* <Sort sortFunc={sortFunc} /> */}
                    <FilesList filteredFiles={this.state.filteredFiles} />
                </div>
            </div>
        )
    }
}
