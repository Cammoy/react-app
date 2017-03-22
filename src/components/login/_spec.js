import { renderComponent, expect } from '../../__test-utils__/helper'
import Login from './'

const stub = {
  username: 'demo_user',
  password: 'password'
}

describe('Login: ', ()=> {
  let component;

  beforeEach( ()=> {
    component = renderComponent(Login)
  })

  // material-ui form fields
  //----------------------------------------------------------------------------

  it('should have email field', () => {
    expect(component.find('.email').find('input')).to.have.attr('type', 'email')
  })
  it('should have password field', () => {
    expect(component.find('.password').find('input')).to.have.attr('type', 'password')
  })
  it('should have submit button', () => {
    expect(component.find('button')).to.have.attr('type', 'submit')
  })

})
