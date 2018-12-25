import React, { Component } from 'react';

// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

export default class DropDownMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropDown flex">
                <MenuIcon className={cx('fas fa-bars menuIcon', {'menuIconClicked': this.props.openMenu},
                    {'menuIconUnclicked': !this.props.openMenu}, {'zeroAnimations': this.props.firstTime })}
                onClick={this.props.menuOpen} />
            </div>
        );
    }

    componentDidMount() {
        this.props.resetMenu();
    }

}

DropDownMenu.propTypes = {
    menuOpen: PropTypes.func, openMenu: PropTypes.bool, firstTime: PropTypes.bool, resetMenu: PropTypes.func, 
};