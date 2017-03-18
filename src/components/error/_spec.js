// Did app render0
//---------------------------------------------------------------------

import { renderComponent , expect } from '../../__test-utils__/helper'
import App from '../../App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
