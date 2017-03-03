import React from 'react'
import Card from './card'


const Grid = ({items}) => {

  // Splt Array into chunks
  const createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  }

  // Create grid rows
  if(items) {
    items = createGroupedArray(items, 3);
    items = items.map( (item, index) => {
      let singles = item.map( (j, i)=> {
        return <Card key={i} item={j}/>
      })
      return <div key={index} className="card-grid__row">{singles}</div>
    })
  }

  return (
    <div className="card-grid">
      {items? items : ''}
    </div>
  )
}

Grid.propTypes = {
  items:  React.PropTypes.array
}

export default Grid;
