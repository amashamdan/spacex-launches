import React, { Component } from "React";
import "./App.css";
import Cards from "../Cards/Cards";
import Video from "../Video/Video";
import Spinner from "../Spinner/Spinner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getLaunches } from "../../graphql/requests";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedVideo: null
        }
        this.setSelectedVideo = this.setSelectedVideo.bind(this);
    }

    componentDidMount() {
        getLaunches().then((result) => {
            console.log(result);
            this.setState({
                data: result.data.data.launches
            })
        }).catch((error) => {
            this.setState({ data: "ERROR" });
        })
    }

    render() {
        const { data, selectedVideo } = this.state;

        let content;

        if (!data) {
            content = <Spinner />;
        } else if (data === "ERROR") {
            content = <p>ERROR</p>;
        } else {
            content = <div>
                <Video selectedVideo={selectedVideo} />
                <Cards data={data} setSelectedVideo={this.setSelectedVideo} />
            </div>;
        }

        return <div>
            <Header />
            <div>
                {content}
            </div>
            <Footer />
        </div>
    }

    setSelectedVideo(selectedVideo) {
        console.log(this)
        this.setState({ selectedVideo });
    }
}