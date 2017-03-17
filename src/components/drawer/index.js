import { SETTINGS } from '../../config.js';
import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

// ICONS
//------------------------------------------------------------------------------

import SearchIcon   from 'material-ui/svg-icons/action/search';
import IconAdd      from 'material-ui/svg-icons/content/add';
import IconProfile  from 'material-ui/svg-icons/action/account-circle';

import Footer from '../footer/index'
import Styles from './style.scss';


export default class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  // Handle opening and closing of menu drawer
  handleToggle = () => this.setState({open: !this.state.open});

  onRequestChange = () => this.setState({open:true});

  render() {

    const searchToggle = (
      <FlatButton
      label="Search..."
      labelPosition="before"
      primary={true}
      style={Styles.button}
      icon={<SearchIcon />}
    />);



    return (
      <div>

        <Drawer className=""
          open={this.state.open}>
            <Link to="/">
              <MenuItem onTouchTap={this.handleToggle} leftIcon={<IconAdd />}>Home</MenuItem>
            </Link>
            <Link to="/listing/add">
              <MenuItem onTouchTap={this.handleToggle} leftIcon={<IconAdd />}>Add New</MenuItem>
            </Link>
            <Link to="/profile">
              <MenuItem onTouchTap={this.handleToggle} leftIcon={<IconProfile />}>Profile</MenuItem>
            </Link>
        </Drawer>

        <AppBar
          title={SETTINGS.TITLE}
          className="fixedTop"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={searchToggle}
          onRightIconButtonTouchTap={ () => browserHistory.push('/search')}
        />

          <div className="custom-drawer__content">
            {this.props.children}
          </div>

        <Footer/>
      </div>
    )
  }
}
