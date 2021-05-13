import React, { Component } from 'react'
import BookmarkedFilesList from './BookmarkedFilesList'
import FilesList from './FilesList'
import Search from './Search'

export default class Portal extends Component {

    // TODO: this.state.user populates the appropriate bookmarkedFiles array
    state = {
        user: this.props.loggedInUser,
        files: [],
        filteredFiles: [],
        // bookmarkedFiles: []
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
        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({bookmarks: [...this.props.loggedInUser.bookmarks, file]})
        }
        fetch(`http://localhost:6001/users/${this.state.user.id}`, configObj)
            .then(res => res.json())
            // TODO: next, we update the user obj to include more arrays
            .then(this.render())
        console.log('addBookmark is running.')
        // console.log(this.state.user.bookmarks)
        // console.log(this.props.loggedInUser)
        // console.log(this.state.user)
    }

    removeBookmark = (e) => {
        console.log('removeBookmark is firing.')
    }

    render() {
        // TODO: Conditionally render BookmarkedFilesList if this.state.bookmarkedFiles.length truthy
        // console.log(this.state.user)
        return (
            <div>
                <h1>Welcome, {this.props.loggedInUser.username}</h1>
                <Search search={this.searchFunc} />
                <div style={{display: 'flex'}}>
                    {/* <Search search={search} /> */}
                    {/* <AddTransactionForm updateTransactions={updateTransactions} /> */}
                    {/* <Sort sortFunc={sortFunc} /> */}
                    <FilesList filteredFiles={this.state.filteredFiles} addBookmark={this.addBookmark} />
                    {/* {this.props.loggedInUser.bookmarks.length ? <BookmarkedFilesList bookmarkedFiles={this.props.loggedInUser.bookmarks} removeBookmark={this.removeBookmark} /> : null} */}
                    {this.state.user.bookmarks.length ? <BookmarkedFilesList bookmarkedFiles={this.state.user.bookmarks} removeBookmark={this.removeBookmark} /> : null}
                </div>
            </div>
        )
    }
}
