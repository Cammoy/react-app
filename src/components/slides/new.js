import VARS from '../../vars';
import React, { Component } from 'react';
import moment from 'moment';
import Action from '../action/';

//import Swiper from 'react-native-swiper';
//import Detail from '../detail/';
//import Stamp from '../stamp/';
//import Save from '../save/';

// Material-ui
//----------------------------------------------
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import Store from 'flux/store/';


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import styles from './style';

// RENDER WHATS ON TEMPLATE
//----------------------------------------------------------

const NewToTown = ({faveToggle, data , header, max}) => {

  data = data || 0;

  // Each slide should contain 3 items
  let sets  = {}, set = [], setCounter = 0, returnViews = [], items;
  for(var i = 0; i < data.length; i++) {

    set.push(data[i]);

    if((i + 1) % max == 0 || (i + 1) >= data.length) {
      setCounter++;
      sets[setCounter] = set;
      set = [];
    }
  }

  // Create Views from sets
  //-----------------------

  for(let i = 1; i <= setCounter; i++) {

    items = sets[i].map( (item, i) => {

      //console.log('ITEM', item);
      let thumbnail = item.better_featured_image;
      if(thumbnail) {
        thumbnail = `${thumbnail.media_details.sizes.thumbnail.source_url}`;
      }
      return(

        <ListItem key={i} rightIconButton={<Action item={item} onClick={faveToggle.bind(this, item)} title="yes" />}
          leftAvatar={<Avatar src={thumbnail ? thumbnail : '../../img/general/noimage.png'} />}
          primaryText={item.acf.name}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
          secondaryTextLines={2} />

        );
    });
    returnViews.push(<List style={{padding:20}} key={i}>{items}</List>);
  }

  if(returnViews.length) {

    return(
      <div>
        <Subheader>{header}</Subheader>
        <SwipeableViews>{returnViews}</SwipeableViews>
      </div> )
  } else {
    return <div><h3>No new items to show</h3></div>;
  }
}

export default NewToTown;
