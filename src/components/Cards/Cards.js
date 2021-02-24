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

            return <div className="card" key={index} onClick={this.setSelectedVideo(entry)}>
                <div className="column is-3">
                    <img className="card-image" src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} />
                </div>
                <div className="column is-9">
                    <p className="card-header-title">Mission: {entry.mission_name}</p>
                    <p className="card-content">Rocket: {entry.rocket.rocket_name}</p>
                    <p className="card-content">Launched from: {entry.launch_site.site_name_long}</p>
                    <p className="card-content">Launched on: {entry.launch_date_local}</p>
                </div>
            </div>
        })

        return <div className="cards-container">
            {cards}
        </div>
    }

    setSelectedVideo(video) {
        return () => {
            this.props.setSelectedVideo(video)
        }
    }
}