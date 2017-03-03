import React, {Component} from 'react'
import { connect } from 'react-redux';

  export default (ComposedComponent) => {

    class Authentication extends Component {

      // Get the router propery of type object from the render tree
      static contextTypes = {
        router: React.PropTypes.object
      }

     componentWillMount() {

       if(!this.props.authenticated === true) {
         this.context.router.push('/')
       }
     }

     componentWillUpdate(nextProps) {
       if(!nextProps.authenticated) {
         this.context.router.push('/')
       }
     }

     render() {
       return <ComposedComponent {...this.props}/>
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
