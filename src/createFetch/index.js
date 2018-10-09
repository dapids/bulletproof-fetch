import { fetch } from '../fetch'

export const createFetch = (factoryOptions, baseExtractPayload) => (input, fetchOptions, extractPayload) => {
  const { headers: baseHeaders } = factoryOptions || {}
  const { headers, ...fetchOptionsRest } = fetchOptions || {}
  const options = {
    ...fetchOptionsRest,
  }

  if (baseHeaders || headers) {
    options.headers = {
      ...baseHeaders,
      ...headers,
    }
  }
  
  return fetch(
    input,
    options,
    extractPayload || baseExtractPayload,
  )
}