// React Setup
//------------------------------------------------------------------------------

import React from 'react'
import { Provider } from 'react-redux'
import Store from './redux/store'
import logo from './logo.svg'
import './App.scss'

const App = ({children}) => {

      return (
        <Provider store={Store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>The Bike Shop</h2>
            </header>
            <div className="App-intro"></div>
            {children}
          </div>
        </Provider>
      );
}

export default App;
