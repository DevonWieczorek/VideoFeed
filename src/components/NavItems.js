import React from 'react';
import {BrowserView} from "react-device-detect";
import Search from "./Search";

const NavItems = () => {
    return(
        <>
            <BrowserView>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item border-bottom active">
                        <Search />
                    </li>
                </ul>
            </BrowserView>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item border-bottom active">
                    <a className="nav-link truncate" href="#">Nav 1</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link truncate" href="#">Nav 2 with very long name goes here</a>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 3 also has a long name but wraps instead</a>
                </li>
                <li className="nav-item border-bottom truncate">
                    <div class="panel-group">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <div class="panel-title">
                            <a className="nav-link truncate" data-toggle="collapse" href="#collapse1">
                                Nav with Subnav
                            </a>
                        </div>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse">
                          <div class="panel-body">
                              <ul className="navbar-nav">
                                  <li className="nav-item border-bottom truncate">Sub 1</li>
                                  <li className="nav-item border-bottom truncate">Sub 2</li>
                                  <li className="nav-item border-bottom truncate">Sub 3 Has a very long name</li>
                              </ul>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li className="nav-item border-bottom">
                    <a className="nav-link" href="#">Nav 5</a>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
