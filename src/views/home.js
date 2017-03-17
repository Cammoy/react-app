import React, { Component } from 'react'
//import List from '../components/list/'
import { fetchListings, faveToggle } from '../redux/actions/'
import { connect } from 'react-redux';

import Slider from '../components/slides/'

 class Home extends Component {

   componentWillMount() {
     this.props.fetchListings();
   }

   _createGroupedArray = (arr, chunkSize) => {
     // Splt Array into chunks
     var groups = [], i;
     if(arr) {

       for (i = 0; i < arr.length; i += chunkSize) {
           groups.push(arr.slice(i, i + chunkSize));
       }
      }
     return groups;
   }

   _faveToggle = (item) => {
     //Actions.faveToggle(item);
     this.props.dispatch( faveToggle.faveToggle(item) )

   }

   render() {

     return (
       <main className="app__content">
         <Slider header="Whats On" data={this._createGroupedArray(this.props.whatson, 3)}/>
         <Slider header="New To Town" data={this._createGroupedArray(this.props.data, 3)}/>
       </main>
     );
   }

}

function mapStateToProps (state) {
  return {
    data: state.data.data,
    whatson: state.data.whatson,
    auth: state.auth.authenticated
  }
}

export default connect( mapStateToProps, { fetchListings } )(Home)
