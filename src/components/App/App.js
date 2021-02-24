import React, { Component } from "React";
import "./App.css";
import Cards from "../Cards/Cards";
import Video from "../Video/Video";
import Spinner from "../Spinner/Spinner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Paginator from "../Paginator/Paginator";
// import Controls from "../Controls/Controls";
import { getLaunches } from "../../graphql/requests";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataLength: 0,
            selectedVideo: null,
            paginationSize: 10,
            page: 1
        }
        this.setSelectedVideo = this.setSelectedVideo.bind(this);
        this.updatePageNumber = this.updatePageNumber.bind(this);
    }

    componentDidMount() {
        const { paginationSize, page } = this.state;

        getLaunches(paginationSize, page).then((result) => {
            let a = [...result.data.data.launches]
            console.log(a)

            this.setState({
                data: a.sort((a, b) => {
                    return new Date(a.launch_date_local).getTime() - new Date(b.launch_date_local).getTime();
                }),
                dataLength: result.data.data.launches.length
            })
        }).catch((error) => {
            this.setState({ data: "ERROR" });
        })
    }

    render() {
        const { data, selectedVideo, paginationSize, page, dataLength } = this.state;

        let content;

        if (!data) {
            content = <Spinner />;
        } else if (data === "ERROR") {
            content = <p>ERROR</p>;
        } else {
            const shownData = this.getShownData(data, paginationSize, page);
            content = <div className="video-cards-container">
                {/* <Controls /> */}
                <Video selectedVideo={selectedVideo} />
                <Cards data={shownData} setSelectedVideo={this.setSelectedVideo} />
                <Paginator paginationSize={paginationSize} page={page}  updatePageNumber={this.updatePageNumber} dataLength={dataLength} />
            </div>;
        }

        return <div>
            <Header />
            <div className="app-content">
                {content}
            </div>
            <Footer />
        </div>
    }

    getShownData(data, paginationSize, page) {
        const startIndex = (page - 1) * 10;
        const endIndex = Math.min(page * 10, data.length);

        return data.slice(startIndex, endIndex);
    }

    setSelectedVideo(selectedVideo) {
        this.setState({ selectedVideo });
    }

    updatePageNumber(newPageNumber) {
        this.setState({ page: newPageNumber });
    }

    updatePaginationSize(size) {
        this.setState({ paginationSize: size });
    }
}