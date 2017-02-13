import React from 'react'
import Item from './item'

/**
* @name List
* @return {string} <ul><li>list item</li></ul>
* @usage <List items={items} />
**/

const List = ({items}) => {

  if(items) {
     items = items.map( (item, i) => {
       return <Item key={i} item={item}/>
    })
  }

  return (
    <ul className="list">
      {items? items : ''}
    </ul>
  )
}

List.propTypes = {
  items:  React.PropTypes.array
}

export default List;
