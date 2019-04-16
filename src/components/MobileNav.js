import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import Logo from "./Logo";
import NavItems from './NavItems';

class MobileNav extends Component {
    state ={isOpen: false}

    toggleOpen = (force) => {
        if(typeof force !== 'undefined'){
            this.setState({...this.state, isOpen: force}, () => {console.log(this.state)});
        }
        else{
            this.setState({...this.state, isOpen: !this.state.isOpen}, () => {console.log(this.state)});
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.toggleOpen(false);
        }
    }

    render(){
        return (
            <nav className="navbar">

                <Logo />

                <button className="navbar-toggler border-top border-bottom over-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded={(this.state.isOpen) ? 'true' : 'false'} aria-label="Toggle navigation" onClick={() => {this.toggleOpen()}}></button>

                <div className={`${(this.state.isOpen) ? 'show' : 'collapse'} navbar-collapse`} id="navbarSupportedContent1">
                    <NavItems />
                </div>

            </nav>
        );
    }
}

export default withRouter(MobileNav);
