import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../redux/reducers/'

// Set up testing environment to run headless browser via jsdom
//------------------------------------------------------------------------------

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

// Build 'renderComponent' helper that should render a given react class
//------------------------------------------------------------------------------

const renderComponent = (ComponentClass, props, state) => {

  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // Return Component (HTML)
  return $(ReactDOM.findDOMNode(componentInstance))
}

// Build helper for simulating events
//------------------------------------------------------------------------------

$.fn.simulate = ( eventName, value ) => {

  if( value) this.val(value);
  TestUtils.simulate[eventName](this[0]);
}

// Setup chai-jquery
//------------------------------------------------------------------------------

chaiJquery(chai, chai.util, $)

export { renderComponent, expect }
