// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.scss';

// function scrollToMission() {
// 	document.getElementById("test").style.backgroundColor = "red";
//     // $('html, body').animate({
//             // scrollTop: $("#missionDiv").offset().top}, 1500, "swing");
// }


ReactDOM.render(<App />, document.getElementById('app'));