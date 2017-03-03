import localStore from 'store'
import React, { Component } from 'react'
import List from '../../components/list/'
import Grid from '../../components/grid/'
import Toolbar from '../../components/toolbar/'


import * as DATA from '../../redux/actions/'
import { connect } from 'react-redux';

@connect( (store) => {
  return {
    data: store.data.bikes,
    pending: store.data.pending,
    rejected: store.data.rejected,
    error: store.data.error,
    filters: store.data.filters,
    layout: store.data.layout
  };
})

export default class Home extends Component {

  componentWillMount(){
    this.props.dispatch( DATA.fetchBikes() );
    this.props.dispatch( DATA.setLayout(localStore.get('layout')) );

    // Check local storage for filter and apply if exists
    const currentFilter = localStore.get('filterBy');
    if(currentFilter) this.props.dispatch( DATA.fetchBikes(currentFilter) );
  }

  filterBy(filter) {

    this.props.dispatch( DATA.fetchBikes(filter.target.innerHTML.trim() ) )

     // get all elements that match our selector
     const elements = document.querySelectorAll('.toolbar__filterBy__item');

     // remove class from all chosen elements
     for (var i=0; i<elements.length; i++) {
       elements[i].classList.remove('toolbar__filterBy__item--active');
     }
     // Toggle active class
     filter.target.classList.toggle('toolbar__filterBy__item--active');
  }

  changeLayout(mode){

    // clear filtering and layout
    if(mode === 'clear') {
      localStore.remove('filterBy');
      localStore.remove('layout');
      this.props.dispatch( DATA.fetchBikes() )
    }
    // set layout mode
    else {
      this.props.dispatch( DATA.fetchBikes() )
      this.props.dispatch( DATA.setLayout(mode) )
    }
  }

  layout(mode) {

    let layout = null;

    if(this.props.pending) {
      layout = <h1>Loading...</h1>
    }
    else if(this.props.rejected) {
      layout = <h1>{this.props.error}</h1>
    }
    else {
      //console.log(localStore.get('layout') );
      const mode = localStore.get('layout');
      if( mode === 'list' )
        layout = <List items={this.props.data}/>

      else if( mode === 'grid' )
        layout = <Grid items={this.props.data}/>

      else
        layout = <Grid items={this.props.data}/>
    }

    return layout;
  }

  search(term) {

  }

  render() {

    // Construct Toolbar
    const layout = {
      heading: 'Filter Options',
      modes:[
        {name:'grid',icon:'th'},
        {name:'list',icon:'list'},
        {name:'clear',icon:'times'}
      ],
      callback: this.changeLayout.bind(this)}


    return (
      <div>
        <aside className="App__sidebar">
          <Toolbar
            classes={{ heading:'Filters',data:this.props.filters }}
            layout={layout} filterBy={this.filterBy.bind(this)}
          />
        </aside>
        <main className="App__main">
          {this.layout(this.props.layout)}
        </main>
        <footer className="App__footer">
          <ul className="App__footer__section">
            <li><a href="#">About The Bike Shop</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Resorources</a></li>
          </ul>
          <ul className="App__footer__section">
            <li><a href="#">Rewards</a></li>
            <li><a href="#">Road Safety</a></li>
            <li><a href="#">Maintenance</a></li>
          </ul>
          <ul className="App__footer__section">
            <li><a href="#">Get intouch</a></li>
            <li><a href="#">Road Safety</a></li>
            <li><a href="#">Maintenance</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}
