import React from 'react'

/**
* @name Page Not Found
* @usage <CustomError code={} message=""/>
* @desc handles 404 directly from router and can also be used anywhere else to display an error message
**/

const Error = (props) => {

  return (
    <div className="error">
      <h1>{props.code || props.route.code} - {props.message || props.route.message}</h1>
    </div>
  )
}

Error.propTypes = {
  code:     React.PropTypes.number,
  message:  React.PropTypes.string
}

export default Error;
