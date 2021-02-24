import React, { Component } from "React";
import PaginationButton from "../Pagination-button/Pagination-button";
import "./Paginator.css";

export default class Paginator extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    render() {
        const {paginationSize, page, dataLength} = this.props;

        const lastPage = this.getLastPage(paginationSize, dataLength);

        return <div className="pagination" role="navigation" aria-label="pagination">
            <a className="pagination-previous" onClick={this.changePage(page - 1, lastPage)}>Previous</a>
            <a className="pagination-next" onClick={this.changePage(page + 1, lastPage)}>Next page</a>
            <ul className="pagination-list">
                <PaginationButton pageNumber={1} page={page} {...this.props} />
                {this.renderFirstEllipses(page)}
                {this.renderFirstGroupButton(page, lastPage)}
                {this.renderMiddleGroupButton(page, lastPage)}
                {this.renderRightGroupButton(page, lastPage)}
                {this.renderTrailingEllipses(page, lastPage)}
                {this.renderLastPage(page, lastPage)}
            </ul>
        </div>
    }

    renderFirstGroupButton(page, lastPage) {
        if (lastPage < 3 || lastPage - page <= 1) {
            return null;
        }

        let pageNumber;
        if (page === 2 || page === 1) {
            pageNumber = 2;
        } else {
            pageNumber = page - 1;
        }

        return <PaginationButton pageNumber={pageNumber} page={page} {...this.props} />;
    }

    renderMiddleGroupButton(page, lastPage) {
        if (lastPage < 4) {
            return null;
        }

        let pageNumber;
        if (page < 4) {
            pageNumber = 3;
        } else if (page > lastPage - 2) {
            pageNumber = lastPage - 2;
        } else {
            pageNumber = page;
        }

        return <PaginationButton pageNumber={pageNumber} page={page} {...this.props} />;
    }

    renderRightGroupButton(page, lastPage) {
        if (lastPage < 5) {
            return null;
        }

        let pageNumber;
        if (page < 3) {
            pageNumber = 4;
        } else if (page >= lastPage - 1) {
            pageNumber = lastPage - 1;
        } else {
            pageNumber = page + 1;
        }

        return <PaginationButton pageNumber={pageNumber} page={page} {...this.props} />;
    }

    renderFirstEllipses(page) {
        if (page < 4) {
            return null;
        }

        return <li>
            <span className="pagination-ellipsis">&hellip;</span>
        </li>
    }

    renderTrailingEllipses(page, lastPage) {
        if (page > lastPage - 3) {
            return null;
        }

        return <li>
            <span className="pagination-ellipsis">&hellip;</span>
        </li>
    }

    renderLastPage(page, lastPage) {
        if (page === lastPage && lastPage === 1) {
            return null;
        }

        return <PaginationButton pageNumber={lastPage} page={page} {...this.props} />;
    }

    getLastPage(paginationSize, dataLength) {
        return Math.ceil(dataLength / paginationSize);
    }

    changePage(newPage, lastPage) {
        return () => {
            if (newPage > lastPage || newPage < 1) {
                return;
            }
            this.props.updatePageNumber(newPage);
        }
    }
}