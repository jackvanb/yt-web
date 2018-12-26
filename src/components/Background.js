import React, { Component } from 'react';
import HomePage from './HomePage.js';
import PropTypes from 'prop-types';

export default class Background extends Component {

    render() {
        return (
            <div className="background">
                <div className="spaceForNav"/>
                <HomePage width={this.props.width}/>
            </div>
        );
    }

}

Background.propTypes = {
    width: PropTypes.number,
};