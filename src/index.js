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
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));

