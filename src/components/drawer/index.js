import { SETTINGS } from '../../config.js';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MenuItem from 'material-ui/MenuItem';
import Footer from '../footer/'
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
          <MenuItem onTouchTap={this.handleToggle}>My Listings</MenuItem>
          <MenuItem onTouchTap={this.handleToggle}>Add New Listing</MenuItem>
        </Drawer>


        <AppBar
          title={SETTINGS.TITLE}
          className="fixedTop"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={searchToggle}
          onRightIconButtonTouchTap={ () => browserHistory.push('/search')}
        />

          <div className="content">
            {this.props.children}
          </div>

        <Footer/>
      </div>
    )
  }
}
