import React, { Component } from "React";
import { getVideoId } from "../../helpers/video";
import "./Video.css";

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.setSelectedVideo = this.setSelectedVideo.bind(this);
    }

    render() {
        const { selectedVideo } = this.props;

        let content;
        let className = "media-content details-div";

        if (!selectedVideo) {
            content = "";
            className += " video-collapsed";
        } else {
            const videoId = getVideoId(selectedVideo.links.video_link);
            let successClass = "content";

            if (selectedVideo.launch_success) {
                successClass += " successful-launch";
            } else {
                successClass += " failed-launch";
            }

            content = <div>
                <iframe className="video-frame" src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="content">{selectedVideo.details ? selectedVideo.details : "No details available for this video"}</p>
                <p className={successClass}>{selectedVideo.launch_success ? "Launch successful" : "Launch did not succeed"}</p>
                <button className="button is-danger details-close" onClick={this.setSelectedVideo}>Close</button>
            </div>
        }

        return <div className={className}>
            {content}
        </div>
    }

    setSelectedVideo() {
        this.props.setSelectedVideo(null);
    }
}