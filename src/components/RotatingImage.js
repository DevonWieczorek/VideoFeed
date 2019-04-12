import React, { Component } from 'react';

class RotatingImage extends Component{
    state = {
        source: '',
        sourceIndex: -1
    }

    interval = null

    onMouseEnter = (sources) => {
        let i = this.state.sourceIndex += 1;
        (i == sources.length) ? this.updateSource(sources[0].src, 0) : this.updateSource(sources[i].src, i);
        this.interval = setTimeout(() => {this.onMouseEnter(sources)}, 1000);
    }

    onMouseLeave = () => {
        this.updateSource(this.props.thumbnail, -1)
        clearTimeout(this.interval);
        this.interval = null;
    }

    updateSource = (source, index) => {
        this.setState({...this.state,
                source: source,
                sourceIndex: index
        }, () => { console.log(this.state) });
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            source: this.props.thumbnail || this.props.sources[0]
        });
    }

    render(){
        return(
            <img
                className={this.props.className}
                src={this.state.source}
                alt={this.props.alt}
                onMouseEnter={() => {this.onMouseEnter(this.props.sources)}}
                onMouseLeave={() => {this.onMouseLeave()}}
            />
        );
    }
}

export default RotatingImage;
