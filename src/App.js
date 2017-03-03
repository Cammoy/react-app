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
          </div>
      );
}

export default App;
