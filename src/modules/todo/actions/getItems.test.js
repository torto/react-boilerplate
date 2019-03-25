import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const { getItems } = require('./getItems')

describe('GetItems Action', () => {
  const firstCallArgs = { type: 'result/ITEMS_LOADING', payload: {} }
  const URL = 'http://localhost:9001/tasks'
  it('execute success', async () => {
    const dispatch = jest.fn()
    const resturnAxios = {
      tasks: [
        { id: 1, name: 'John Smith' }
      ]
    }
    const mock = new MockAdapter(axios)
    mock.onGet(URL).reply(200, resturnAxios)
    await getItems()(dispatch)

    const secondCallArgs = { type: 'result/ITEMS_SUCCESS',
      payload: { data: resturnAxios.tasks } }

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
    expect(dispatch).toHaveBeenNthCalledWith(2, secondCallArgs)
  })

  it('execute error', async () => {
    const dispatch = jest.fn()
    const mock = new MockAdapter(axios)
    mock.onGet(URL).networkError()
    await getItems()(dispatch)

    const secondCallArgs = { type: 'result/ITEMS_ERROR',
      payload: { data: 'Network Error'}}

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
    expect(dispatch).toHaveBeenNthCalledWith(2, secondCallArgs)
  })
})
