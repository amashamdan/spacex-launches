import React, { Component } from "React";
import "./App.css";
import Cards from "../Cards/Cards";
import Video from "../Video/Video";

export default class App extends Component {
    render() {
        return <div>
            <Cards />
            <Video />
        </div>
    }
}