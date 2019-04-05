import React from 'react';

const CollapsiblePanel = ({id, title, children}) => {
    return(
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <div className="nav-link truncate" data-toggle="collapse" href={`#${id}`}>
                    {title}
                </div>
            </div>
            </div>
            <div id={id} className="panel-collapse collapse">
              <div className="panel-body">{children}</div>
            </div>
          </div>
      </div>
    );
}

export default CollapsiblePanel;
