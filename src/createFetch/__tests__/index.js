import { fetch } from '../../fetch'
import { createFetch } from '..'

// fetchModule.fetch = jest.fn()
// const { fetch } = fetchModule

describe('createFetch', () => {
  it('should yield a fetch abstraction flavour', () => {
    const fooFetch = createFetch()

    expect(typeof fooFetch).toBe('function')
  })

  // describe('fetch abstraction flavour', () => {
  //   it('should invoke the fetch abstraction', () => {
  //     const fooFetch = createFetch()

  //     fooFetch()
  //     expect(fetch).toHaveBeenCalled()
  //   })

  //   describe('fetch abstraction', () => {
  //     it('', () => {})
  //   })
  // })
})
