import { renderComponent, expect } from '../../__test-utils__/helper'
import List from './'
import Item from './item'


// List
//------------------------------------------------------------------------------

const stub_list = {
  items: [
    {
      name: 'Item 1',
      image: ''
    },
    {
      name: 'Item 2',
      image: 'https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Strawberry-Fruit-Juice-128.png'
    }
  ]
}


describe('List:', () => {

  let component;

  beforeEach(() => {

    component = renderComponent(List, stub_list)
  });

  it('should render list items', () => {
    expect( component ).class('list')
    expect( component.find('li').length ).to.equal(2)
  })

})


// Item - Given Object
//------------------------------------------------------------------------------

describe('Item - Given Object:', () => {

  const stub_item = {
    item: {
      name: 'Item ',
      image: 'https://cdn3.iconfinder.com/data/icons/food-3-11/128/food_Strawberry-Fruit-Juice-128.png'
    }
  }

  let component;

  beforeEach(() => {
    component = renderComponent(Item, stub_item)
  });

  it('should render list item', () => {
    expect( component ).class('item')
  })

  it('should render name object property', () => {
    expect( component ).to.contain(stub_item.item.name)
  })
  it('should render image tag', () => {
    expect( component.find('img').length ).to.equal(1)
  })
  it(`image tag should have src from object's image property`, () => {
    expect( component.find('img').attr('src')).to.contain(stub_item.item.image)
  })

})

// Item - Given String
//------------------------------------------------------------------------------

describe('Item - Given String:', () => {

  let component;
  let stub_string = { item: 'list item string' };

  beforeEach(() => {
    component = renderComponent(Item, stub_string)
  });
  it('should render list item', () => {
    expect( component ).to.contain(stub_string.item)
  })
  it('should NOT render image tag', () => {
    expect( component.find('img').length ).to.equal(0)
  })

})
