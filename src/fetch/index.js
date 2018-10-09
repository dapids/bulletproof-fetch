export const fetch = async (
  input,
  options = {},
  extractPayload,
) => {
  const { body, ...optionsRest } = options
  const request = new global.Request(input, {
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
    ok: error ? false : response.ok,
  }
}