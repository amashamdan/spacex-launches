import React, { Component } from "React";
import { getVideoId } from "../../helpers/video";
import "./Video.css";

export default class Video extends Component {
    render() {
        const { selectedVideo } = this.props;

        if (!selectedVideo) {
            return null;
        }

        const videoId = getVideoId(selectedVideo.links.video_link);

        return <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{selectedVideo.details ? selectedVideo.details : "No details available for this video"}</p>
        </div>
    }
}