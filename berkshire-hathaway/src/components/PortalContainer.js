import React, { Component } from 'react'
import BookmarkedFilesList from './BookmarkedFilesList'
import FilesList from './FilesList'
import Search from './Search'

export default class Portal extends Component {

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
        if (!this.state.user.bookmarks.some(bookmark => bookmark.id === file.id)) {
            let configObj = {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, body: JSON.stringify({ bookmarks: [...this.state.user.bookmarks, file] })
            }
            fetch(`http://localhost:6001/users/${this.state.user.id}`, configObj)
                .then(res => res.json())
                .then(data => this.setState({
                    user: data
                }))
        }
    }

    removeBookmark = (e, file) => {
        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify({ bookmarks: this.state.user.bookmarks.filter(bookmark => bookmark.id !== file.id) })
        }
        fetch(`http://localhost:6001/users/${this.state.user.id}`, configObj)
            .then(res => res.json())
            .then(data => this.setState({ 
                user: data
            }))
    }

    render() {
        return (
            <div>
                <div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
                <div>
                    <h1>Welcome, {this.props.loggedInUser.username}</h1>
                    <h3>testemail@foo.com</h3>
                </div>
                </div>
                <Search search={this.searchFunc} />
                <div className='flex'>
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
