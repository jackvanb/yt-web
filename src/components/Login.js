import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

// import PropTypes from 'prop-types';
//THEME FOR NAV BAR
const theme = createMuiTheme({
  palette: {
    primary: { main: "#fffafa" }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["impact", "helvetica", "sans-serif"].join(",")
  }
  // overrides: {
  //     Button: {
  //         fontWeight: 700,
  //     }
  // },
});

export default class Login extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="page">
                    <div id="background"> </div>
                    <div className="spaceForNav"/>
                    <div className="accountDiv flex">
                    <img className="loginLogo" />
                        <h1 className="youtrition loginText"> 
                            Log In
                        </h1>
                        <form className="accountForm flex">
                            Username/E-mail: <br />
                            <br />
                            <input type="text" name="email" placeholder="joel33@gmail.com" /> 
                            <br />
                            Password: <br />
                            <br />
                            <input type="text" name="password" />
                            <br />
                            <Button variant="contained" className="loginButton" color="primary"> 
                              <NavLink style={{ color: "inherit" }} to="/">
                                Log In
                              </NavLink>
                             </Button>
                            <br />
                            Dont have an account? <br /> <a className="signUpHere"> Sign Up Here </a>
                        </form>

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

// Background.propTypes = {
//     width: PropTypes.number,
// };