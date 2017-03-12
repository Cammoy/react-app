import VARS from '../../vars';
import React, { Component } from 'react';
import moment from 'moment';

//import Detail from '../detail/';
//import Stamp from '../stamp/';
//import Save from '../save/';

// Material-ui
//----------------------------------------------
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import styles from './style';

// RENDER WHATS ON TEMPLATE
//----------------------------------------------------------

export default class WhatsOn extends Component {

  constructor(props) {
    super(props);

      this.state = {
        dataitems:0,
      };
   }


   componentDidMount() {
     this.initData();
   }

  initData() {
       fetch(VARS.API.ALL)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              dataitems: responseData
            });
       });
     }

  render() {

    let slideItems  = this.state.dataitems,
    curWeek         = moment().add(6, 'days').valueOf(), // Next 7 days including today
    now             = moment().valueOf();

    // Each slide should contain 3 items
    let sets ={}, set = [], setCounter = 0, max = this.props.max, returnViews = [], items;

      for(var i = 0; i < slideItems.length; i++) {
        let event_end_date = moment(slideItems[i].acf.event_end_date, "DD/MM/YYYY").valueOf();

        if( event_end_date && event_end_date !== '' && event_end_date >= now
        && event_end_date <= curWeek ) {

          set.push(slideItems[i]);
        }
      }

      while (set.length > 0) {
        setCounter++;
        sets[setCounter] = set.splice(0, 3);
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

              <ListItem key={i}
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

        // Return Views
        //-----------------------

        if(returnViews.length) {

          return(
            <div>
              <Subheader>{this.props.header}</Subheader>
              <AutoPlaySwipeableViews>{returnViews}</AutoPlaySwipeableViews>
            </div> )
        } else {
          return <div><h3>No new items to show</h3></div>;
        }
  }
}
