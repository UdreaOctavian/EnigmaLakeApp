import { SERVER_ADDRESS_REDEEM, SERVER_ADDRESS_WALLET } from '../utils/constants'
import { sendRequest } from './Api'

export const getBalance = (
    data,
    callbackForSuccess,
    callbackForFailure
) => {
    sendRequest(SERVER_ADDRESS_WALLET, '/get-balance', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const createRedemption = (
    data,
    callbackForSuccess,
    callbackForFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/create-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const retrieveRedemption = (
    data,
    callbackForSuccess,
    callbackForFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/retrieve-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}