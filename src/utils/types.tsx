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

export type CallbackSuccess1 = (data: UserBalanceData) => void
export type CallbackSuccess2 = (data: CreateRedemptionData) => void
export type CallbackSuccess3 = (data: RedemptionData[]) => void
  
export type CallbackSuccess = CallbackSuccess1 | CallbackSuccess2 | CallbackSuccess3

export type GetBalanceRequest = {
    coinType: number
    userId: number
}

export type RetrieveRedemptionRequest = {
    userId: number
}

export type CreateRedemptionRequest = {
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