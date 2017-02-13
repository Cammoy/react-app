import React from 'react'
//import Style from './style'

/**
* @name List item
* @return {string} <li>list item</li>
* @usage <Item item="list item" />
**/

const Item = ({item}) => {
  return (
    <li className="product">
        <span className="product__image">
          <img src={item.image.thumb} alt={item.name} />
        </span>
        <span className="product__name">
          {item.name}
        </span>
    </li>
  )
}

Item.propTypes = {
  item: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

export default Item;
