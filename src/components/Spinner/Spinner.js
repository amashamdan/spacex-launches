import React, { Component } from "React";
import "./Spinner.css";
import spinnerImage from "../../assets/spinner-small.gif";

export default class Spinner extends Component {
    render() {
        return <div className="spinner-div">
            <div>
                <img className="spinner-image" src={spinnerImage} />
                <p className="spinner-text">Please wait while we load the data ...</p>
            </div>
        </div>
    }
}