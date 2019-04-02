import React from 'react';

const TileHeroLink = (props) => {
    return(
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-auto mr-auto ml-auto tile tile-hero-link border-all rounded">
          <a href={props.link || '#'} className="tile-link" target={props.target || "_blank"}>
            <div className="tile-hero">
              <img src={props.src || 'http://www.fillmurray.com/300/200'} alt={props.title || 'Content Unavailable'}/>
            </div>
            <div className="tile-info">
              <div className="tile-title">{props.title || 'Content Unavailable'}</div>
              <div className="tile-details">
                {props.children || 'Nothing to see here.'}
              </div>
            </div>
          </a>
        </div>
    );
}

export default TileHeroLink;
