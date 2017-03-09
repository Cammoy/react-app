import localStore from 'store'
import React, { Component } from 'react'
import List from '../components/list/'
import Grid from '../components/grid/'
import Toolbar from '../components/toolbar/'


import * as DATA from '../redux/actions/'
import { connect } from 'react-redux';

function mapStateToProps( state ) {
  return {
    filters:  state.data.filters,
    layout:   state.data.layout,
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
