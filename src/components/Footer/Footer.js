import React, { Component } from "React";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return <div className="footer columns">
            <div className="footer-section column is-8">
                <p>Developed by Amer Hamdan (<a href="mailto:amashamdan@gmail.com"> amashamdan@gmail.com</a>)</p>
                <li><a href="https://www.linkedin.com/in/amerhamdan" target="blank">Linkedin</a></li>
                <li><a href="https://github.com/amashamdan" target="blank">Github</a></li>
                <li><a href="http://codepen.io/amashamdan/" target="blank">CodePen</a></li>
            </div>
            <div className="footer-section footer-copyright column is-4">
                <p>Copyright © SpaceX Launches Explorer 2021. All Rights Reserved</p>
            </div>
        </div>
    }
}