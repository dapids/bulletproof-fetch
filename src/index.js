export const fetch = async (
  input,
  options = {},
  extractPayload,
) => {
  const { body, ...optionsRest } = options
  const request = new global.Request({
    ...optionsRest,
    body: JSON.stringify(body),
  })

  let error
  let payload
  let response = {}

  try {
    response = await global.fetch(input, request)
  } catch (error) {
    error = error
  }

  if (!error && extractPayload) {
    payload = await extractPayload(response)
  }

  return {
    error,
    payload,
    response,
    ok: !error || response.ok,
  }
}

export const createFetch = (baseOptions = {}, baseExtractPayload) => (input, options = {}, extractPayload) => {
  const { body: baseBody, headers: baseHeaders, ...baseOptionsRest } = baseOptions
  const { body, headers, ...optionsRest } = options

  return fetch(
    input,
    {
      ...baseOptionsRest,
      ...optionsRest,
      body: {
        ...baseBody,
        ...body,
      },
      headers: {
        ...baseHeaders,
        ...headers,
      },
    },
    extractPayload || baseExtractPayload,
  )
}
