import React, { Component } from "React";
import "./Pagination-button.css";

export default class PaginationButton extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    render() {
        const { pageNumber, page } = this.props;

        let buttonClass = "pagination-link";
        if (page === pageNumber) {
            buttonClass += " is-current"
        }

        return <li onClick={this.changePage}>
            <a className={buttonClass}>{pageNumber}</a>
        </li>
    }

    changePage() {
        this.props.updatePageNumber(this.props.pageNumber);
    }
}