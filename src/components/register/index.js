import React, {Component} from 'react'
import { Link, browserHistory } from 'react-router'
import axios from 'axios';
import './style.scss'

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'kwasi',
      password: 'passion',
      errors: []
    }
  }

  _onChange = (e) => {

    let email = this.state.email,
        password = this.state.password;

    if(e.target.name === 'email' ) email = e.target.value
    if(e.target.name === 'password') password = e.target.value

    this.setState({
      email,
      password
    }, () => {
      console.log(this.state)
    })
  }

  _register = (e) => {

    axios.post('http://localhost:3030/users/', {
      email: this.state.email,
      password: this.state.password
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.error(error);
    });

  }

  render() {

    return(
      <div className="initial">
        <h1 className="initial__header">Ruby's Curated Travel App
          <span className="initial__desc">
            Lets get started
          </span>
        </h1>
        <div className="initial__form">
          <input className="initial__input" name="email" type="text" onChange={this._onChange} value={this.state.email}/>
          <input className="initial__input" name="password" type="password" onChange={this._onChange} value={this.state.password}/>
          <div className="initial__btn" onClick={this._register}>Register</div>
        </div>
        <h1>Already have an account</h1>
        <Link className="initial__btn" to='/login'>Login</Link>
      </div>
    )
  }

}

Register.propTypes = {
  onClick: React.PropTypes.func
}

export default Register;
