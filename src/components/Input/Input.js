import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default class Input extends React.Component {
    render() {
        return(
            <input className="CommonInput" 
                    name={this.props.name}
                    id={this.props.id} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}/>
        )
    }
}