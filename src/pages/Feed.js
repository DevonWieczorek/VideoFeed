import React from 'react';
import { withRouter } from "react-router-dom";
import NotFound from './NotFound';
import TileHeroLink from '../modules/TileHeroLink';
import Pagination from '../components/Pagination';
import {abbvNumber} from '../utils/misc';
import { getURLParam } from "../utils/url";

const Feed = (props) => {
    const renderFeed = (results) => {
        // Return our NotFound component if there's nothing to display
        if(!results) return <NotFound/>;

        let items = [];
        for(var i = 0; i < 12 && i < results.videos.length; i++){
            let video = results.videos[i];
            items.push(
                <TileHeroLink
                    title={video['title']}
                    src={video['default_thumb']}
                    link={video['url']}
                    key={`${video['id']}_${i}`}
                >
                    <div className="row">
                        <div className="single-detail col">
                            {abbvNumber(video['views'])} Views &middot; <span className="success">{parseFloat(video['rating']).toFixed(1)}%</span>
                    </div>
                        <div className="single-detail col">{video['duration']}</div>
                    </div>
                </TileHeroLink>
            );
        }
        return items;
    }

    return(
        <>
            {renderFeed(props.results)}

            {(props.results) ?
                <center className="clear">
                    <Pagination
                        ariaLabel="footer-pagination"
                        onPageUpdate={() => {}}
                        page={getURLParam(props, 'page')}
                        lastPage="10"
                    />
                </center>
            : null}
        </>
    );
}

export default withRouter(Feed);
