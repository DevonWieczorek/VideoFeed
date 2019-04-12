import React from 'react';
import { withRouter } from "react-router-dom";
import TileHeroLink from '../modules/TileHeroLink';
import Pagination from '../components/Pagination';
import {randomNumber, abbvNumber} from '../helpers/misc';
import { getURLParam } from "../helpers/url";

const Feed = (props) => {
    const renderFeed = () => {
        let items = [];
        for(var i = 0; i < 12; i++){
            items.push(
                <TileHeroLink
                    title="Dynamic Title"
                    src="http://www.fillmurray.com/300/200"
                    link="#"
                >
                    <div className="row">
                        <div className="single-detail col">{abbvNumber(randomNumber(10000, 76526173))} Views &middot; <span className="success">78.6%</span></div>
                        <div className="single-detail col">31:24</div>
                    </div>
                </TileHeroLink>
            );
        }
        return items;
    }

    return(
        <>
            {renderFeed()}

            <center className="clear">
                <Pagination
                    ariaLabel="footer-pagination"
                    onPageUpdate={() => {}}
                    page={getURLParam(props, 'page')}
                    lastPage="10"
                />
            </center>
        </>
    );
}

export default withRouter(Feed);
