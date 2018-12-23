import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import NavBar from './NavBar/NavBar.js';

export default class App extends Component {

    constructor(props) {
        super(props);

        // this.state = {width: 0};
        // this.setSize = this.setSize.bind(this);
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
            </div>
        );
    }
}