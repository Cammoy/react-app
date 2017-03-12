import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import IconLogin from 'material-ui/svg-icons/social/person-outline';
import IconRegister from 'material-ui/svg-icons/navigation/arrow-forward';
import { browserHistory } from 'react-router'
import './style.scss'


const Initial = () => {

  return(
    <div className="initial">
      <div className="initial__intro center_xy">
        <h1 className="initial__header">Ruby's Curated Travel</h1>
        <div className="initial__desc">
          Condimentum nisi pharetra interdum quisque.
        </div>
        <RaisedButton
          className="initial__btn"
          label="LOGIN"
          labelPosition="after"
          primary={true}
          icon={<IconLogin />}
          onClick={ ()=> browserHistory.push("login")}
        />

        <RaisedButton
          className="initial__btn"
          label="REGISTER"
          labelPosition="after"
          primary={true}
          icon={<IconRegister />}
          onClick={ ()=> browserHistory.push("register")}
        />
      </div>
    </div>
  )
}

export default Initial;
