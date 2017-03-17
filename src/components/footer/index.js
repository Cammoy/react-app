import React, {Component} from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

// icons
//-----------------------------------------------------------------------------
import IconRestore    from 'material-ui/svg-icons/action/restore';
import IconNearby     from 'material-ui/svg-icons/communication/location-on';
import IconFavorites  from 'material-ui/svg-icons/action/favorite';


const recents   = <IconRestore/>;
const nearby    = <IconNearby />;
const faves     = <IconFavorites />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */


 const styles = {
   fixedBottom: {
     position: 'fixed',
     bottom: 0,
     left: 0,
     right: 0,
     zIndex:999
   }
 }
 
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1} style={styles.fixedBottom}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recents}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={faves}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearby}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
