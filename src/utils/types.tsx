export type UserBalanceData = {
    message: string
    userId: number
    winBalance: number
    depositBalance: number
    totalBalance: number
    lastUpdatedAt: string
}
  
export type RedemptionData = {
    redemptionIntentId: string
    userId: number
    amount: number
    redemptionStatus: number
    redeemableFundsStatus: number
    paymentStatus: number
    updatedAt: string
    createdAt: string
}
  
export type CreateRedemptionData = {
    code: string
    message: string
}

export type GetUserBalanceSuccessCallback = (data: UserBalanceData) => void
export type CreateRedemptionSuccessCallback = (data: CreateRedemptionData) => void
export type GetRedemptionsSuccessCallback = (data: RedemptionData[]) => void
  
export type CallbackSuccess = GetUserBalanceSuccessCallback | CreateRedemptionSuccessCallback | GetRedemptionsSuccessCallback

export type GetBalanceRequestObject = {
    coinType: number
    userId: number
}

export type RetrieveRedemptionRequestObject = {
    userId: number
}

export type CreateRedemptionRequestObject = {
    amount: number
    userId: number
}

export type RequestData = { userId: number; amount?: number } | { coinType: number; userId: number }
  
  
type RequestErrorWithBody = {
    message: string
    body: { coinType: number; userId: number }
}
  
type RequestErrorWithCode = {
    code: string
    message: string
}

export type RequestError = RequestErrorWithBody | RequestErrorWithCode
  
export type CallbackFailure = (error: RequestError) => void