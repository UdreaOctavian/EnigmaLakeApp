import { SERVER_ADDRESS_REDEEM, SERVER_ADDRESS_WALLET } from '../utils/constants'
import { CallbackFailure, GetUserBalanceSuccessCallback, CreateRedemptionSuccessCallback, GetRedemptionsSuccessCallback, GetBalanceRequestObject, CreateRedemptionRequestObject, RetrieveRedemptionRequestObject } from '../utils/types'
import { sendRequest } from './Api'

export const getBalance = (
    data: GetBalanceRequestObject,
    callbackForSuccess: GetUserBalanceSuccessCallback,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_WALLET, '/get-balance', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const createRedemption = (
    data: CreateRedemptionRequestObject,
    callbackForSuccess: CreateRedemptionSuccessCallback,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/create-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}

export const retrieveRedemption = (
    data: RetrieveRedemptionRequestObject,
    callbackForSuccess: GetRedemptionsSuccessCallback,
    callbackForFailure: CallbackFailure
) => {
    sendRequest(SERVER_ADDRESS_REDEEM, '/retrieve-redemption-intent', 'POST', data, callbackForSuccess, callbackForFailure)
}