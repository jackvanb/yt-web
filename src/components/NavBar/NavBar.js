import React, { Component } from 'react';

import DropDownMenu from './Menu.js';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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

class Logo extends Component {
    render() {
        return(
            <a className="navDiv1" href="#"> 
                <img className="logo"/>
            </a>
        );
    }
}

class OtherPageButtons extends Component {
    render() {
        return(
            <div className="navDiv2 flex">
                <Button className="navDiv2button" color="primary">Take the Quiz</Button>
                <Button className="navDiv2button" color="primary">Meet Our Nutritionists</Button>
                <Button className="navDiv2button" color="primary">Contact Us</Button>
            </div>
        );
    }
}

class LogInButton extends Component {
    render() {
        return(
            <Button className="navDiv3button" variant="contained" color="primary">
            Log In
            </Button>
        );
    }
}

class SignUpLogInButtons extends Component {
    render() {
        return(
            <div className="navDiv3 flex">
                <Button className="navDiv3button" variant="contained" color="primary">Sign Up</Button>
                <div className="navDiv3space"> </div>
                <LogInButton />
            </div>
        );
    }
}

//NAV BAR
export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {width: 0};
        this.setSize = this.setSize.bind(this);
    }

    render() {
        let first = this.state.width > 770 ? <Logo /> : <DropDownMenu />;
        let second = this.state.width > 770 ? <OtherPageButtons /> : <Logo />;
        let third = this.state.width > 770 ? <SignUpLogInButtons /> : <LogInButton />;
        return(
            <MuiThemeProvider theme={theme}>
                <div className="navBackground flex">
                    <Toolbar className="navBar">
                        {first}
                        {second}
                        {third}
                    </Toolbar>
                </div>
            </MuiThemeProvider>
        );
    }

    setSize() {
        this.setState({width: window.innerWidth});
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', this.setSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize);
    }
}