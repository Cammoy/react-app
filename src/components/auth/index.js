import React, {Component} from 'react'
import * as DATA from '../../redux/actions/'
import { connect } from 'react-redux';
import localStore from 'store'
import AuthRoot from '../drawer/'

  export default (ComposedComponent) => {

    class Authentication extends Component {

      // Get the router propery of type object from the render tree
      static contextTypes = {
        router: React.PropTypes.object
      }

     componentWillMount() {

       if(!this.props.authenticated) {
         this.context.router.push('/')
       } else {

         this.props.dispatch( DATA.fetchBikes() );
         this.props.dispatch( DATA.setLayout(localStore.get('layout')) );

         // Check local storage for filter and apply if exists
         const currentFilter = localStore.get('filterBy');
         if(currentFilter) this.props.dispatch( DATA.fetchBikes(currentFilter) );
       }
     }

     componentDidUpdate(nextProps) {
       localStore.remove('token')
       if(!nextProps.authenticated) {
         this.context.router.replace('/')
       }
     }

     render() {
       return <div>
         <AuthRoot>
           <ComposedComponent {...this.props}/>
         </AuthRoot>
       </div>

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
