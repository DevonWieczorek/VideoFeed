import React, {Component} from "react";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

class PartnerLogo extends Component {
    state = {
        active: '',
        imgSrc: ''
    }

    updateSrc = () => {
        // TODO: figure out why this is one behind the active brand
        console.log(this.props);
        let active = this.props.partnerLogo;
        //let imgSrc = this.props.providers[active].logo;
        this.setState({...this.state, imgSrc: active}, () => {console.log(this.state)});
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.updateSrc();
        }
    }

    componentDidMount(){
        this.updateSrc();
    }

    render(){
        return(
            <img
                id="partner-logo"
                className={this.props.className}
                src={this.state.imgSrc}
                alt={this.props.alt || this.state.active}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{ ...state.brands};
}

export default connect(mapStateToProps, {})(withRouter(PartnerLogo));
