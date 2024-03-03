export const sendRequest = (
    serverAddress,
    endpoint,
    method,
    data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callbackForSuccess: ((data: any) => void) | null = null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callbackForFailure: ((data: any) => void) | null = null
  ) => {
      const url = `${serverAddress}${endpoint}`
      const options = {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    
      fetch(url, options)
        .then(res => res.json())
        .then(data => callbackForSuccess ? callbackForSuccess(data) : null)
        .catch(error => callbackForFailure ? callbackForFailure(error) : null)
  }