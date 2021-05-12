import React, { Component } from 'react'
import BookmarkedFilesList from './BookmarkedFilesList'
import FilesList from './FilesList'
import Search from './Search'

export default class Portal extends Component {

    // TODO: this.state.user populates the appropriate bookmarkedFiles array
    state = {
        user: '',
        files: [],
        filteredFiles: [],
        bookmarkedFiles: []
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

    addBookmark = (e, file) => {
        // TODO: grab specific fileObj and add to user array
        // .fetch('')
        console.log('addBookmark is running')
    }

    render() {
        // TODO: Conditionally render BookmarkedFilesList if this.state.bookmarkedFiles.length truthy
        return (
            <div>
                <h1>Welcome, Miles</h1>
                <Search search={this.searchFunc} />
                <div style={{display: 'flex'}}>
                    {/* <Search search={search} /> */}
                    {/* <AddTransactionForm updateTransactions={updateTransactions} /> */}
                    {/* <Sort sortFunc={sortFunc} /> */}
                    <FilesList filteredFiles={this.state.filteredFiles} addBookmark={this.addBookmark} />
                </div>
            </div>
        )
    }
}
