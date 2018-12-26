import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import NavBar from './NavBar/NavBar.js';
import Background from './Background.js';

export default class App extends Component {

    constructor() {
        super();

        this.state = {width: 0};
        this.setSize = this.setSize.bind(this);
    }

    render() {
        return (
            <div>
                <NavBar width={this.state.width}></NavBar>
                <Background width={this.state.width}/>
            </div>
        );
    }

    setSize() {
        this.setState({width: window.innerWidth});
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }
}