import React, { Component } from 'react';

import NavBar from './NavBar/NavBar.js';

import Background from './Background.js';
import Second from './Second.js';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
    constructor() {
        super();

        this.state = { width: 0 };
        this.setSize = this.setSize.bind(this);
    }

    render() {
        return (
            <div>
                <NavBar width={this.state.width} />
                <Switch>
                    <Route exact path="/" component={Background} />
                    <Route exact path="/contact" component={Second} />
                </Switch>
            </div>
        );
    }

    setSize() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }
}
