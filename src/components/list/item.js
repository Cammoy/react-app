import React from 'react'
//import Style from './style'

/**
* @name List item
* @return {string} <li>list item</li>
* @usage <Item item="list item" />
**/

const Item = ({item}) => {

  // Check if its a string
  if (typeof item === 'object') {

    let image;
    { item.image? image = item.image : image = "assets/img/default.png" }

    item =
      <li className="item">
        <span className="item__image">
          <img src={image} alt={item.name} />
        </span>
        <span className="item__name">
          {item.name}
        </span>
      </li>
  }
  if ( typeof item === 'string' || item instanceof String ) {
    item = <li className="item">{item}</li>
  }

  return item
}

Item.propTypes = {
  item: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

export default Item;
