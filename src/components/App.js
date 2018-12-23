import React, { Component } from 'react';

import NavBar from './NavBar/NavBar.js';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <NavBar></NavBar>
            </div>
        );
    }
}