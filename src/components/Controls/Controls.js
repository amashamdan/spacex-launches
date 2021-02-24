import React, { Component } from "React";
import "./Controls.css";

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.changePaginationSize = this.changePaginationSize.bind(this);
    }

    render() {
        return <div className="controls-div columns">
            <div className="column is-9"></div>
            <div className="column is-3">
                <span>Results per page: </span>
                {this.renderPaginationSizeMenu()}
            </div>
        </div>
    }

    renderPaginationSizeMenu() {
        const { paginationSize, paginationSizes } = this.props;

        const options = paginationSizes.map((size, index) => {
            return <option key={index} value={size}>{`${size} Results`}</option>
        })

        return <select value={paginationSize} onChange={this.changePaginationSize}>
            {options}
        </select>
    }

    changePaginationSize(event) {
        this.props.updatePaginationSize(event.target.value);
    }
}