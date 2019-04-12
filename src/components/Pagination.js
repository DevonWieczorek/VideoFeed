import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateURLParams, getURLParam } from "../helpers/url";

class Pagination extends Component {
    state = {
        currPage: 1,
        MAX_PAGES: 3,
        LAST_PAGE: null
    }

    updatePage = (page) => {
        switch(page){
            case '-1':
                let dec = this.state.currPage - 1;
                if(dec < 1) dec = 1;
                this.handlePageUpdate(dec);
                break;
            case '+1':
                let inc = this.state.currPage + 1;
                this.handlePageUpdate(inc);
                break;
            default:
                this.handlePageUpdate(page);
                break;
        }
    }

    handlePageUpdate = (page, INITIAL = false) => {
        this.setState({
            ...this.state,
            currPage: parseInt(page)
        }, () => {
            updateURLParams(this.props, "page", parseInt(page));
            // INITIAL flag was added to prevent unintentional callback on page load
            if(!INITIAL && this.props.onPageUpdate) this.props.onPageUpdate();
        });
    }

    dynamicPageButtons = () => {
        const buttons = []
        for(var i = 0; i < this.state.MAX_PAGES; i++){
            let index = this.state.currPage + i;
            let classNames = `page-item ${(index === this.state.currPage) ? 'active' : ''}`;
            buttons.push(
                <li className={`${classNames}`}>
                  <span
                    className="page-link"
                    onClick={() => { this.updatePage(index); }}
                    page={index}
                  >{index}</span>
                </li>
            );
        }
        return buttons;
    }

    componentDidMount(){
        // Accept current page as a prop otherwise grab it as a url param
        let page = this.props.page || getURLParam(this.props, 'page') || 1;
        this.setState({ ...this.state, currPage: parseInt(page) });

        // Allow setting a limit on the number of pages
        if(this.props.lastPage && (this.props.currPage <= this.props.lastPage)){
            this.setState({...this.state, LAST_PAGE: parseInt(this.props.lastPage)});
        }
    }

    render() {
        return (
          <nav className="pagination-holder" aria-label={this.props.ariaLabel}>
            <ul className="pagination">
              {(this.state.currPage > 1) ?
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => { this.updatePage('-1'); }}
                      page="-1"
                    >&laquo;</span>
                  </li>
              : null}

              {this.dynamicPageButtons()}

              {(!this.state.LAST_PAGE || (this.state.currPage + (this.state.MAX_PAGES - 1) < this.state.LAST_PAGE)) ?
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => { this.updatePage('+1'); }}
                      page="+1"
                    >&raquo;</span>
                  </li>
              : null}
            </ul>
          </nav>
        );
    }
}

export default withRouter(Pagination);
