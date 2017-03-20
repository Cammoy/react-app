import React from 'react'

/**
* @name Error Message component
* @usage <CustomError code={} message=""/>
* @desc handles 404 directly from router and can also be used anywhere else to display an error message
**/

const Error = (props) => {

  return (
    <div className="error">
      {props.code} - {props.message}
    </div>
  )
}

Error.propTypes = {
  code:     React.PropTypes.number,
  message:  React.PropTypes.string
}

export default Error;
