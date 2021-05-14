import React, { Component } from 'react'
import VideosList from './VideosList'

export default class VideoContainer extends Component {

    state = {
        videos: []
    }

    componentDidMount() {
        fetch("http://localhost:6001/videos")
            .then((res) => res.json())
            .then((videos) =>
            this.setState({ videos })
        );
    }
        
    render() {
        return (
            <div>
                <VideosList videos={this.state.videos} />
            </div>
        )
    }
}