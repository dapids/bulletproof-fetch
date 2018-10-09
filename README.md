# bulletproof-fetch

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

Fetches made easy.

[build-badge]: https://img.shields.io/travis/dapids/bulletproof-fetch/master.png?style=flat-square
[build]: https://travis-ci.org/dapids/bulletproof-fetch

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

## What is this package about?
`bulletproof-fetch` is a [whatwg/fetch](https://fetch.spec.whatwg.org) abstraction and factory.

## Why would I need this package?
### The `fetch` abstraction
Conceptually the `fetch` abstraction is just a proxy to [whatwg/fetch](https://fetch.spec.whatwg.org) that handles exceptions due to network errors for you (e.g. the client is offline).
In addition it yelds an object with the following properties:

#### error
It's `undefined` if no network errors occur during the fetch.
It contains the caught exception due to a network error if that occurred during the fetch.

#### ok
It's `true` if no network errors occur during the fetch and the response status code goes from `200` to `299`.
It's `false` otherwise.

#### response
It contains the plain [whatwg/fetch](https://fetch.spec.whatwg.org) response.

#### payload
It contains the payload extracted from the response if we provide a function to extract it.
It is `undefined` otherwise.

### The `createFetch` factory
The `createFetch` factory allows you to create different `fetch` functions with different default values and payload extraction behaviours.

#### Example
Create a new flavour of the fetch function:
```JavaScript
const extractPayload = response => response.json()
const jsonFetch = createFetch({
  headers: {
    'Content-Type': 'application/json',
  },
}, extractPayload)
```

Now all the following fetch functions fancy:
- the header `'Content-Type': 'application/json'`.
- a `payload` property in the yielded object containing the result of `response.json()`.
```JavaScript
const { error, ok, payload, response } = await jsonFetch('https://jsonplaceholder.typicode.com/todos/1')

console.log(error) // undefined
console.log(ok) // true
console.log(payload) // { userId: 1, id: 1, title: delectus aut autem, completed: false }
console.log(response) // the plain response object
```

## Installation
### Yarn
```JavaScript
yarn add bulletproof-fetch
```

### NPM
```JavaScript
npm install --save bulletproof-fetch
```

## Usage
### Abstraction
#### Example

### Factory
#### Example
