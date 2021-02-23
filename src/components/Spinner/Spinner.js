import React, { Component } from "React";
import "./Spinner.css";
// import spinnerImage from "../../assets/spinner-large.gif";
import spinnerImage from "../../assets/spinner-small.gif";

export default class Spinner extends Component {
    render() {
        return <div className="spinner-div">
            <img className="spinner-image" src={spinnerImage} />
        </div>
    }
}