import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

// import PropTypes from 'prop-types';
//THEME FOR NAV BAR
const theme = createMuiTheme({
  palette: {
    primary: { main: "#84ADD9" }
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

export default class Signup extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="page">
                    <div id="background"> </div>
                    <div className="spaceForNav"/>
                    <div className="accountDiv flex">
                    <img className="loginLogo" />
                        <h1 className="loginText"> 
                            Sign Up
                        </h1>
                        <form className="accountForm flex">
                            E-mail: <br />
                            <br />
                            <input type="email" 
                                   name="email" 
                                   required 
                                   placeholder="joel33@gmail.com" />
                            <br />
                            Create a Username: <br />
                            <br />
                            <input type="text" 
                                   name="username" 
                                   required
                                   pattern=".{4,}" 
                                   title="4 characters minimum"/> 
                            <br />
                            Password: <br />
                            <br />
                            <input type="password" 
                                   name="password" 
                                   required pattern=".{8,}" 
                                   title="8 characters minimum"/>
                            <br />
                            <Button type="submit" 
                                    variant="contained" 
                                    className="loginButton" 
                                    color="primary"> 
                              <NavLink style={{ color: "inherit" }} to="/">
                                Sign Up
                              </NavLink>
                            </Button>
                            <br />
                            Already have an account? <br />
                              <NavLink style={{ color: "inherit", textDecoration: "underline" }} to="/login">
                                Log In Here
                              </NavLink>
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