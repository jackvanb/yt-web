import React, { Component } from 'react';

// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import MenuItem from '@material-ui/core/MenuItem';
export default class DropDownMenu extends Component {
    render() {
        return (
            // <div className="dropDownOtherPage"> aaaaa </div>
            // <div color="primary">
            // <MenuItem primaryText="Take The Quiz"/>
            // <MenuItem primaryText="Meet Our Nutritionists"/>
            // <MenuItem primaryText="Contact Us" />
            // </div>
            // <Menu className="fas fa-bars">
            <div className="dropDown">
                <MenuIcon className="fas fa-bars apple" /> 
            </div>
            // </Menu>
        );
    }
}