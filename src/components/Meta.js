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
                <meta property="og:title" content={this.props.ogTitle} />
                <meta property="og:image" content={this.props.ogImage} />
            </MetaTags>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.meta};
}

export default connect(mapStateToProps, {updateMeta})(Meta);
