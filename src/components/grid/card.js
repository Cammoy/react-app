import React from 'react'
import './style.scss'

/**
* @name Page Not Found
* @usage <CustomError code={} message=""/>
* @desc handles 404 directly from router and can also be used anywhere else to display an error message
**/

const Card = (props) => {

  const {id, name, description, image, last} = props.item;
  //console.log('props.item.class', props.item.class);

  let category = props.item.class.map( (item, i) => <li key={i}>{item}</li>  );

  return (
    <div className="card">
      <img src={image.thumb} alt="Avatar" style={{width:'100%'}}/>
      <div className="card-container">
        <h4><b>{name}</b></h4>
        <p style={{display:'none'}}>{description}</p>
        <ul className="card__footer">
          {category}
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  id:     React.PropTypes.number,
  name:   React.PropTypes.string,
  desc:     React.PropTypes.string,
  class:  React.PropTypes.string,
}

export default Card;
