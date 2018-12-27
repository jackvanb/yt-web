// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
// STYLES

import 'normalize.css';
import './styles/app.scss';

import App from './components/App.js';

// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file
// import routes from './routes';

ReactDOM.render(<App />, document.getElementById('app'));