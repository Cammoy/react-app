import React, {Component} from 'react'
import { connect } from 'react-redux';
import localStore from 'store'
import AuthRoot from '../drawer/'

/*
  Check if use changed url will ensure that
  if a user deleted the token or press the back button
  they are re-authenticated
*/

import store        from '../../redux/store'
import { browserHistory } from 'react-router'
browserHistory.listen(function(ev) {
  //console.log('listen', ev.pathname);
  if( localStore.get('token') === undefined) {
    store.dispatch({type:'unauth_user'})
  }
});

  export default (ComposedComponent) => {

    class Authentication extends Component {

      // Get the router propery of type object from the render tree
      static contextTypes = {
        router: React.PropTypes.object
      }

     componentWillMount() {

       if(!this.props.authenticated) {
         this.context.router.replace('/')
       }
     }

     componentWillUpdate(nextProps) {
       if(!nextProps.authenticated) {
         localStore.remove('token')
         this.context.router.replace('/')
       }
     }

     render() {
       return (
         <AuthRoot>
           <ComposedComponent {...this.props}/>
         </AuthRoot>
       )
     }
   }

// connect component to redux store and map authenticated to prop
//------------------------------------------------------------------------------

function mapStateToProps(state){
   return {
     authenticated:state.auth.authenticated
   }
 }
 return connect(mapStateToProps)(Authentication)

}
