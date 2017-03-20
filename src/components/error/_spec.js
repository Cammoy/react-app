
// Test Error component
//---------------------------------------------------------------------

import React from 'react'
import { renderComponent, expect } from '../../__test-utils__/helper'
import Comp from './'


const stub = {
  code: 401,
  message: "Something went wrong"
}

describe('Error Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Comp, stub);
  });

  it('Renders', () => {
    expect(component).to.exist;
  });

  it('Has error class', () => {
    expect(component).has.class('error')
  });

  it('shows error code', () => {
    expect(component).to.contain(stub.code)
  });
  it('shows error message', () => {
    expect(component).to.contain(stub.message)
  });

});
