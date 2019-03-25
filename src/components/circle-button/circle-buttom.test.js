import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import CircleButton from '.'

describe('CircleButtonComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<CircleButton />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('onCLick simulate', async () => {
    const onClick = jest.fn()
    const tree = shallow(<CircleButton onClick={onClick}/>)
    tree.find('Circle').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
