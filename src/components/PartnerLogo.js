import React, {Component} from "react";
import {connect} from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";

class PartnerLogo extends Component {
    render(){
        return(
            <div className="dynamic-partner-logo">
                <NavLink to={`/${this.props.activeBrand}`} key={this.props.activeBrand}>
                    <img
                        id="partner-logo"
                        className={this.props.className}
                        src={this.props.partnerLogo}
                        alt={this.props.alt || this.props.activeBrand}
                    />
                </NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{ ...state.brands};
}

export default connect(mapStateToProps, {})(withRouter(PartnerLogo));
