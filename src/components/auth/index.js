import React, {Component} from 'react'
import { connect } from 'react-redux';
import localStore from 'store'
import AuthRoot from '../drawer/'



import store from '../../redux/store'
import { browserHistory } from 'react-router'


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

    componentWillUnmount() {
      /*
       Listen for navigation and check if the user is still authenticated
        If a user deletes the token or clicked the back button then
        user needs to be re-authenticated
      */
       browserHistory.listen(function(ev) {
         if( localStore.get('token') === undefined ) {
           store.dispatch({type:'unauth_user'})
         }
       });
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
