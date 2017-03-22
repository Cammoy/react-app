
// Test Error component
//---------------------------------------------------------------------

import { renderComponent, expect } from '../../__test-utils__/helper'
import Comp from './'


const stub = {
  code: 401,
  message: "Something went wrong"
}

describe('Error Component:' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Comp, stub);
  });

  it('Renders', () => {
    expect(component).to.exist;
  });

  it('shoud have error class', () => {
    expect(component).has.class('error')
  });

  it('should have error code', () => {
    expect(component).to.contain(stub.code)
  });
  it('should have error message', () => {
    expect(component).to.contain(stub.message)
  });

});
