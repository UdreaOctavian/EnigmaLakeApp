import { RequestData, CallbackSuccess, CallbackFailure } from "../utils/types"

export const sendRequest = (
    serverAddress: string,
    endpoint: string,
    method: string,
    data: RequestData,
    callbackForSuccess: CallbackSuccess = () => {},
    callbackForFailure: CallbackFailure = () => {}
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
        .then(data => callbackForSuccess(data))
        .catch(error => callbackForFailure(error))
}