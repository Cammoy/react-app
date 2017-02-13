import React from 'react'
import Style from './style.scss'

/**
* @name Toolbar
* @usage <Filter classes={} filter={function}/>
* @desc handles filtering & layout change
**/

const Toolbar = ({ classes, filterBy, layout, search }) => {


// Build Class Filter
//----------------------------------------------------------
  let filters = [];

  if( classes.data ) {
     filters = classes.data.map( (item, i) => {
      return <li key={i+'filter'} className="toolbar__filterBy__item" onClick={filterBy.bind(item)}>{item}</li>;
    })
  }

  filters = <ul className="toolbar__filterBy">
              <li className="toolbar__layout--heading">{classes.heading}</li>
              {filters}
            </ul>

// Build Layout Modes
//----------------------------------------------------------

let modes = [];

  if( layout.modes.length ) {
    modes = layout.modes.map( (item, i) => {
      return <li key={i+'mode'} className="toolbar__layout__item" onClick={layout.callback.bind(this, item.name)}>
        <i className={'fa fa-'+item.icon+ ' toolbar__layout__item--icon'}> </i>
        {item.name}
      </li>
    })
  }

  modes = <ul className="toolbar__layout">
            <li className="toolbar__layout--heading">{layout.heading}</li>
            {modes}
          </ul>

  return (
    <div className="toolbar">
      {filters}
      {modes}
    </div>
  )
}

Toolbar.propTypes = {
  classes:  React.PropTypes.object,
  filterBy: React.PropTypes.func,
}

export default Toolbar;
