import React, { Component } from 'react';
import './Sousnav.css';

class Sousnav extends Component {
    render() {
        if (this.props.navexsist === 1) {
            return (
                <div className='sousnavbar'>
                    {this.props.navelist.map(x => <p>{x}</p>)}
                </div>
            )
        }
        else
            return null
    }
}

export default Sousnav;