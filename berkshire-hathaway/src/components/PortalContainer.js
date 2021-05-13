import React, { Component } from "react";
import BookmarkedFilesList from "./BookmarkedFilesList";
import Videos from "./Videos";
import FilesList from "./FilesList";
import Search from "./Search";
import './PortalContainer.css'

export default class Portal extends Component {
  state = {
    user: this.props.loggedInUser,
    userView: "uploads",
    files: [],
    filteredFiles: [],
  };

  componentDidMount() {
    fetch("http://localhost:6001/corporate-governance-files")
      .then((res) => res.json())
      .then((files) =>
        this.setState({
          files: files,
          filteredFiles: files,
        })
      );
  }

  toggleView = (newView) => {
    this.setState({
      userView: newView,
    });
  };

  getView = () => {
    switch (this.state.userView) {
      case "uploads":
        return (
          <div>
            {" "}
            <Search search={this.searchFunc} />{" "}
            <FilesList
              filteredFiles={this.state.filteredFiles}
              addBookmark={this.addBookmark}
            />{" "}
          </div>
        );
      case "bookmarks":
        return (
          <BookmarkedFilesList
            bookmarkedFiles={this.state.user.bookmarks}
            removeBookmark={this.removeBookmark}
          />
        );
      case "videos":
        return <Videos />;
      default:
        console.log("This ain't it.");
    }
  };

  searchFunc = (e) => {
    let filteredAllFiles;
    e.target.value.length
      ? (filteredAllFiles = this.state.files.filter((file) =>
          file.filename.toLowerCase().includes(e.target.value.toLowerCase())
        ))
      : (filteredAllFiles = this.state.files);

    this.setState({
      filteredFiles: filteredAllFiles,
    });
  };

  addBookmark = (e, file) => {
    if (
      !this.state.user.bookmarks.some((bookmark) => bookmark.id === file.id)
    ) {
      let configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          bookmarks: [...this.state.user.bookmarks, file],
        }),
      };
      fetch(`http://localhost:6001/users/${this.state.user.id}`, configObj)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            user: data,
          })
        );
    }
  };

  removeBookmark = (e, file) => {
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bookmarks: this.state.user.bookmarks.filter(
          (bookmark) => bookmark.id !== file.id
        ),
      }),
    };
    fetch(`http://localhost:6001/users/${this.state.user.id}`, configObj)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

    render() {
        return (
            <div>
                <div className="user-container center justify-center flex mt4 mb7">
                    <div className="flex flex-column ma4 justify-between ba b--light-gray br4 bg-light-gray">
                        <div className="flex-column">
                            <h1 className="pa3">Welcome, {this.props.loggedInUser.username}</h1>
                            <div className="flex items-center">
                                <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="user-circle"
                                className="svg-inline--fa fa-user-circle fa-w-16 pa3"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                >
                                <path
                                fill="currentColor"
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                                ></path>
                            </svg>
                            <h3 className="ma0 pa3">testemail@foo.com</h3>
                        </div>
                            <div className="menu-container pv2">
                                <div className="pv1 ph3 mv2">
                                    <a
                                    className=""
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="uploads"
                                    >
                                    Uploaded Files
                                    </a>
                                </div>
                                <div className="pv1 ph3 mv2">
                                    <a
                                    className=""
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="bookmarks"
                                    >
                                    Bookmarked Files
                                    </a>
                                </div>
                                <div className="pv1 ph3 mv2">
                                    <a
                                    className=""
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="videos"
                                    >
                                    Videos
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-column justify-between">
                            <div className="flex justify-between support-container">
                                <div className="pa3">Request a New Document</div>
                                <div className="pa3">Help</div>
                            </div>
                        </div>
                    </div>
                <div className="ma4 file-container">{this.getView()}</div>
            </div>
        </div>
    );
    }
}
