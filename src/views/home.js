import React from 'react'
import List from '../components/list/'

import * as DATA from '../redux/actions/'
import { connect } from 'react-redux';

function mapStateToProps( state ) {
  return {
    data:     state.data.bikes
  }
}

 const Home = (props) => {

  return (
    <main className="app__content">
    </main>
  );

}

export default connect(mapStateToProps)(Home)
