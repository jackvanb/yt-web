import React, { Component } from "react";

import DropDownMenu from "./Menu.js";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import cx from "classnames";
import { NavLink } from "react-router-dom";

//THEME FOR NAV BAR
const theme = createMuiTheme({
  palette: {
    primary: { main: "#fffafa" }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Futura", "helvetica", "sans-serif"].join(",")
  }
  // overrides: {
  //     Button: {
  //         fontWeight: 700,
  //     }
  // },
});

class Logo extends Component {
  render() {
    return (
      <div className="navDiv1">
        <NavLink to="/">
          <a className="smallLogo" />
        </NavLink>
      </div>
    );
  }
}

class OtherPageButtons extends Component {
  render() {
    return (
      <div className="navDiv2 flex">
        <Button className="navDiv2button" color="primary">
          <NavLink style={{ color: "inherit" }} to="/quiz">
            Take The Quiz
          </NavLink>
        </Button>
        <Button className="navDiv2button" color="primary">
          <NavLink style={{ color: "inherit" }} to="/meet">
            Meet Our Nutritionists
          </NavLink>
        </Button>
        <Button className="navDiv2button" color="primary">
          <NavLink style={{ color: "inherit" }} to="/contact">
            Contact Us
          </NavLink>
        </Button>
      </div>
    );
  }
}

class LogInButton extends Component {
  render() {
    return (
      <Button
        className="navDiv3button"
        variant="contained"
        color="primary"
        size="small"
      >
        {" "}
          <NavLink style={{ color: "inherit" }} to="/login">
            Log In
          </NavLink>
      </Button>
    );
  }
}

class SignUpLogInButtons extends Component {
  render() {
    return (
      <div className="navDiv3 flex">
        <Button
          className="navDiv3button"
          variant="contained"
          color="primary"
          size="small"
        >
          <NavLink style={{ color: "inherit" }} to="/signup">
          {" "}
            Sign Up
          {" "}
          </NavLink>
        </Button>
        <div className="navDiv3space"> </div>
        <LogInButton />
      </div>
    );
  }
}

class MenuList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className={cx(
          "menuList",
          { slideIn: this.props.open },
          { slideOut: !this.props.open },
          { zeroAnimations: this.props.firstTime }
        )}
        style={{ marginTop: this.props.height }}
      >
        <Button className="menuItem flex" color="primary">
          {" "}
          Take The Quiz{" "}
        </Button>
        <Button className="menuItem flex" color="primary">
          {" "}
          Meet Our Nutritionists{" "}
        </Button>
        <Button className="menuItem flex" color="primary">
          {" "}
          Contact Us{" "}
        </Button>
      </div>
    );
  }
}

MenuList.propTypes = {
  height: PropTypes.number,
  open: PropTypes.bool,
  firstTime: PropTypes.bool
};

//NAV BAR
export default class NavBar extends Component {
  constructor() {
    super();

    this.state = { height: 0, openMenu: false, firstTime: true };
    this.setSize = this.setSize.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
    this.resetMenu = this.resetMenu.bind(this);
  }

  menuOpen() {
    this.setState(prevState => {
      return {
        firstTime: false,
        openMenu: prevState.openMenu == true ? false : true
      };
    });
  }

  resetMenu() {
    this.setState(() => {
      return { firstTime: true, openMenu: false };
    });
  }

  render() {
    var desktopVsMobile = this.props.width > 600;
    let first = desktopVsMobile ? (
      <Logo />
    ) : (
      <DropDownMenu
        menuOpen={this.menuOpen}
        openMenu={this.state.openMenu}
        firstTime={this.state.firstTime}
        resetMenu={this.resetMenu}
      />
    );
    let second = desktopVsMobile ? <OtherPageButtons /> : undefined;
    let third = desktopVsMobile ? <SignUpLogInButtons /> : <LogInButton />;
    let mobileLogo = desktopVsMobile ? undefined : <Logo />;
    let mobileSpace = desktopVsMobile ? (
      undefined
    ) : (
      <div className="navSpace" />
    ); // if(desktopVsMobile) this.setState({firstTime: true});
    return (
      <MuiThemeProvider theme={theme}>
        <div id="navBack" className="navBackground flex">
          {mobileLogo}
          <Toolbar className="navBar">
            {first}
            {second}
            {mobileSpace}
            {third}
          </Toolbar>
        </div>
        <MenuList
          height={this.state.height}
          open={this.state.openMenu}
          firstTime={this.state.firstTime}
        >
          {" "}
        </MenuList>
      </MuiThemeProvider>
    );
  }

  setSize() {
    this.setState({ height: document.getElementById("navBack").clientHeight });
  }

  componentDidMount() {
    this.setSize();
    window.addEventListener("resize", this.setSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSize);
  }
}

NavBar.propTypes = {
  width: PropTypes.number
};
