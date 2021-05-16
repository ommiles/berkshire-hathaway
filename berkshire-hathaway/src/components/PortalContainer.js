import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBookmark, faFilm } from '@fortawesome/free-solid-svg-icons';
import BookmarkedFilesList from "./BookmarkedFilesList";
import VideoContainer from "./VideoContainer";
import FilesList from "./FilesList";
import Search from "./Search";
import Sort from "./Sort";
import NavBar from './NavBar'
import './PortalContainer.css';

const clock = <FontAwesomeIcon icon={faClock} />
const bkmk = <FontAwesomeIcon icon={faBookmark} />
const film = <FontAwesomeIcon icon={faFilm} />

export default class Portal extends Component {
  state = {
    user: this.props.loggedInUser,
    userView: "uploads",
    files: [],
    filteredFiles: [],
    toggleUploads: false,
    toggleBookmarks: false,
    toggleVideos: false,
  };

  componentDidMount() {
    fetch("http://localhost:6001/corporate-governance-files")
      .then((res) => res.json())
      .then((files) =>
        this.setState({
          files: files,
          filteredFiles: files.sort((a, b) => a.filename < b.filename ? -1 : 1 )
        })
      );
  }

  toggleView = (newView) => {
    switch (newView) {
      case "uploads":
        this.setState({
          toggleUploads: !this.state.toggleUploads
        })
      case "bookmarks":
        this.setState({
          toggleBookmarks: !this.state.toggleBookmarks
        })
      case "videos":
        this.setState({
          toggleVideos: !this.state.toggleVideos
        })
    }
    this.setState({
      userView: newView,
    });
  };

  getView = () => {
    switch (this.state.userView) {
      case "uploads":
        return (
          <div>
            <div className="flex justify-between items-center">
              <Search search={this.searchFunc} />
              <Sort sortFunc={this.sortFunc} />
            </div>
            <div className='bb b--light-silver mt3' ></div>
            <FilesList
              filteredFiles={this.state.filteredFiles}
              addBookmark={this.addBookmark}
            />
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
        return <VideoContainer />;
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

  sortFunc = (val) => {
    switch (val) {
      case "year":
        this.setState({
          filteredFiles: this.state.filteredFiles.sort((a, b) =>
            b.year - a.year
          ),
        });
        break;
      case "alphabetical":
        this.setState({
          filteredFiles: this.state.filteredFiles.sort((a, b) => a.filename < b.filename ? -1 : 1 ),
        });
        break;
    }
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

      // const white = 'background-color: '

        return (
            <div className="portal-container center">
              <NavBar />
                <div className="center justify-center flex mt5 mb7">
                    <div className="user-container flex flex-column ma2 justify-between ba b--light-gray br4 bg-light-gray" style={{minHeight: '440px'}}>
                        <div className="flex-column">
                          <div className="flex items-center justify-around mb4">
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="user-circle"
                            width="5px"
                            height="5px"
                            className="svg-inline--fa fa-user-circle fa-w-16 pv3"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 5 150"
                            >
                            <path
                            fill="currentColor"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                            ></path>
                            </svg>
                            <div className="flex flex-column justify-start ml4">
                              <h1 className="pt3 pb0 mb0">Welcome,</h1>
                              <h1 className="pa0 ma0">{this.props.loggedInUser.username}</h1>
                              <h4 className="ma0 center pr3 pl1">testemail@foo.com</h4>
                            </div>
                        </div>
                            <div className="menu-container pv2 b">
                                <div className="pv1 ph3 mv1 ml3 mr5 ba b--light-gray br4" style={{backgroundImage: this.state.toggleUploads ? 'white' : 'lightgray'}}>
                                    <a
                                    className="pointer"
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="uploads"
                                    >
                                    {clock} Uploaded Files
                                    </a>
                                </div>
                                <div className="pv1 ph3 mv1 ml3 mr5 ba b--light-gray br4">
                                    <a
                                    className="pointer"
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="bookmarks"
                                    >
                                    {bkmk} Bookmarked Files
                                    </a>
                                </div>
                                <div className="pv1 ph3 mv1 ml3 mr5 ba b--light-gray br4">
                                    <a
                                    className="pointer"
                                    onClick={(e) => this.toggleView(e.target.id)}
                                    id="videos"
                                    >
                                    {film} Videos
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-column justify-between">
                            <div className="flex justify-between support-container">
                                <p className="pa3">Request a New Document</p>
                                <p className="pa3">Help</p>
                            </div>
                        </div>
                    </div>
                <div className="ma2 file-container">{this.getView()}</div>
            </div>
        </div>
    );
    }
}
