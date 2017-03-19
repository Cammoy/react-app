
// Test Error component
//---------------------------------------------------------------------

import React from 'react'
import { renderComponent, expect } from '../../__test-utils__/helper'
import Comp from './'

console.log(Comp);

const stub = {
  code: 500,
  message: "Something went wrong"
}

describe('Error Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Comp);
  });

  it('Renders', () => {
    expect(component).to.exist;
  });
  it('Has error class', () => {
    expect(component).has.class('error')
  });
});
