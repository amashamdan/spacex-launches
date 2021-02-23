import React, { Component } from "React";
import { getVideoId } from "../../helpers/video";
import "./Cards.css";

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.setSelectedVideo = this.setSelectedVideo.bind(this);
    }

    render() {
        const { data } = this.props;

        const cards = data.map((entry, index) => {
            const videoLink = entry.links.video_link;
            const videoId = videoLink ? getVideoId(videoLink) : null;

            return <div key={index} onClick={this.setSelectedVideo(entry)}>
                <img src={`https://img.youtube.com/vi/${videoId}/2.jpg`} />
                <p>Mission: {entry.mission_name}</p>
                <p>Rocket: {entry.rocket.rocket_name}</p>
                <p>Launched from: {entry.launch_site.site_name_long}</p>
                <p>Launched on: {entry.launch_date_local}</p>
            </div>
        })

        return <div>
            {cards}
        </div>
    }

    setSelectedVideo(video) {
        return () => {
            this.props.setSelectedVideo(video)
        }
    }
}