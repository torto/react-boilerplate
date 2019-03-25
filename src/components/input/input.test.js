import React from 'react'
import renderer from 'react-test-renderer'

import Input from '.'

describe('InputComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Input
        label={'label'}
        value={'text'}
        onChange={() => {}}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
