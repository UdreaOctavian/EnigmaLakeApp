import { SERVER_ADDRESS_REDEEM, SERVER_ADDRESS_WALLET } from '../utils/constants'
import { CallbackFailure, CallbackSuccess1, CallbackSuccess2, CallbackSuccess3, GetBalanceRequest, CreateRedemptionRequest, RetrieveRedemptionRequest } from '../utils/types'
import { sendRequest } from './Api'

export const getBalance = (
    data: GetBalanceRequest,
    callbackForSuccess: CallbackSuccess1,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_WALLET, '/get-balance', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const createRedemption = (
    data: CreateRedemptionRequest,
    callbackForSuccess: CallbackSuccess2,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/create-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const retrieveRedemption = (
    data: RetrieveRedemptionRequest,
    callbackForSuccess: CallbackSuccess3,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/retrieve-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}