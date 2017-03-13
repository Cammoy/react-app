import VARS from '../../vars.js';
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Store from '../../flux/store/';

/**
* @name Action
* @param action {enum}
* @param click {func}
* @param title {string}
* @return {string} <div> <img="img/action.png" title="action title"/></div>
* @usage <Action />
**/

const Action = ({ item, title, onClick}) => {

  // Set default toggle value to empty
  let faveToggle = 'fa fa-heart-o';

 // if item is in the basted toggle saved to active
  if( Store._basketItems ) {
    const index = Store._basketItems.findIndex( (i) => i.id === item.id);
    if(index > -1)  faveToggle = 'fa fa-heart';
  }

  return (
    <div onClick={onClick}>
      <FontIcon className={ faveToggle }/>
    </div>
  )
}

Action.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
}

export default Action;
