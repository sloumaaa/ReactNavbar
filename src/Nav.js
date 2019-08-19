import React, { Component } from 'react';
import Sousnav from './Sousnav';
import './Sousnav.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <div className='hautnavbar'>
                 <a href={this.props.navobj.lien}> <p>{this.props.navobj.namenav}</p> </a>
                 <Sousnav navexsist={this.props.navobj.contientsousnav} navelist={this.props.navobj.sounav} />
                </div>
            </div> 
        );
    }
}

export default Nav;