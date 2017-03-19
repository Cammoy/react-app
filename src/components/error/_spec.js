// Did app render
//---------------------------------------------------------------------

import React from 'react'
import { renderComponent, expect } from '../../__test-utils__/helper'
import Comp from './'

const stub = {
  code: 500,
  message: "Something went wrong"
}

describe('Error Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(<Comp code={stub.code} message={stub.message} />);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
