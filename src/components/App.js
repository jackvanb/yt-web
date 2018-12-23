import React, { Component } from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import Hidden from '@material-ui/core/Hidden';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

//THEME FOR NAV BAR
const theme = createMuiTheme({
    palette: {
        primary: {main: '#ffffff'}//'#fffafa'}
    },
    typography: {
        fontFamily: [
            'impact', 'sans-serif',
        ].join(','),
    }
});

//NAV BAR
class NavBar extends Component {
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <div className="navBackground flex">
                    <Toolbar className="navBar">
                        <a className="navDiv1 logo" href="#"> 
                            <IconButton> <a className="logo"></a> </IconButton>
                        </a>
                        <div className="navDiv2 flex">
                            <Button className="navDiv2button" color="primary">Take the Quiz</Button>
                            <Button className="navDiv2button" color="primary">Meet Our Nutritionists</Button>
                            <Button className="navDiv2button" color="primary">Contact Us</Button>
                        </div>
                        <div className="navDiv3 flex">
                            <Button className="navDiv3button" variant="raised" color="primary">Sign Up</Button>
                            <div className="navDiv3space"> </div>
                            <Button className="navDiv3button" variant="raised" color="primary">Log In</Button>
                        </div>
                    </Toolbar>
                </div>
            </MuiThemeProvider>
        );
    }
}

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