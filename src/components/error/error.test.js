import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


import Error from '.'

describe('ErrorComponent', () => {
  it('Snapshot', async () => {
    window.location.reload = jest.fn()
    const tree = shallow(<Error isOpen={true} message={'test'} />)

    expect(toJson(tree)).toMatchSnapshot()
    window.location.reload.mockRestore()
  })
  it('Snapshot without open', async () => {
    window.location.reload = jest.fn()
    const tree = shallow(<Error isOpen={false} message={'test'} />)

    expect(toJson(tree)).toMatchSnapshot()
    window.location.reload.mockRestore()
  })
  it('onClose', async () => {
    window.location.reload = jest.fn()
    const tree = mount(<Error isOpen={true} message={'test'} />)
    const container = tree.find('ModalContainer')
    container.simulate('click')
    expect(container).toBeDefined()
    window.location.reload.mockRestore()
  })
})
