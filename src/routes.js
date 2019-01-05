import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Background from './components/Background.js';
import Second from './components/Second.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// const routes = [
// {
//     path: '/';
//     component: Background,
// }
// ];

export default class Main extends Component {
    render() {
        return(
            <main>
                <Route exact path='/' component={Background} />
                <Route path='/second' component={Second}/>
            </main>
        );
    }
    
}

// export default Main;