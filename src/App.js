// React Setup
//------------------------------------------------------------------------------

import React from 'react'
import Store from './redux/store'
import logo from './logo.svg'
import './App.scss'

const App = ({children}) => {

      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>The Bike Shop</h2>
            </header>
            <div className="App-intro"></div>
            {children}
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

export default App;
