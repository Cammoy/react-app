import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

//<Action item={item} onClick={faveToggle(item)} title="yes" />

const NewToTown = ({faveToggle, data , header}) => {

  const _renderListViews = () => {

      data = data.map( (items, index) => {

        let singles = items.map( (item, i)=> {
          // Use default image is not thumbnail found
          const image = item.image || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&s=150';

          return (
            <ListItem key={i}
            leftAvatar={<Avatar src={image} />}
            primaryText={item.name}
            secondaryText={item.generalInfo}
            secondaryTextLines={2} />
          )
        })
        return <div key={index}>{singles}</div>
      })

    return data;
  }

return (
  <div>
    <Subheader>{header}</Subheader>
    {<SwipeableViews>{_renderListViews()}</SwipeableViews>}
  </div>
  )
}
export default NewToTown;
