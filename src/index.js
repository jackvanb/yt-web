// -–––––––––––––––––––––––––––––––––––––––––––––––––––––––––- \\
/* IMPROVEMENTS THAT CAN BE MADE 
1. import the scss files for individual pages (e.g. account.scss for Login.js)
directly in the .js file for that component
*/

// -–––––––––––––––––––––––––––––––––––––––––––––––––––––––––- \\

// PACKAGE DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// STYLES
import 'normalize.css';
import './styles/app.scss';
import './styles/account.scss';

import App from "./components/App.js";

import $ from "jquery";

// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file
// import routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
  $("#background").css("top", 0 - scrolled * 0.25 + "px");
});
