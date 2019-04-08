import React, {Component} from 'react';
import {connect} from 'react-redux';
import MetaTags from 'react-meta-tags';
import {updateMeta} from '../actions';

class Meta extends Component {
    render(){
        return(
            <MetaTags>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description} />
                <meta name="keywords" content={this.props.keywords} />
                <meta name="subject" content={this.props.subject} />
                <meta name="robots" content={this.props.robots} />
                <meta property="og:title" content={this.props.ogTitle} />
                <meta property="og:image" content={this.props.ogImage} />
                <meta property="og:site_name" content={this.props.ogSiteName} />
                <meta property="og:description" content={this.props.ogDescription || this.props.description} />
                <meta property="og:url" content={this.props.ogURL || window.location.href} />
            </MetaTags>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.meta};
}

export default connect(mapStateToProps, {updateMeta})(Meta);
