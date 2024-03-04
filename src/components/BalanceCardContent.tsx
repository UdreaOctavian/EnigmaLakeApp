import { useEffect, useState } from "react"
import { createRedemption, getBalance, retrieveRedemption } from '../api/ApiRequests.js'
import { RequestError, RedemptionData, UserBalanceData } from "../utils/types.js";
import InnerCard from "./InnerCard.js";
import { GET_BALANCE_REQUEST_OBJECT, RETRIEVE_REDEMPTION_REQUEST_OBJECT, USER_ID } from "../utils/constants.js";

type CardsContainerProps = {
    setRedemptionIntents: (redemptionIntents: RedemptionData[]) => void
}

const BalanceCardContent: React.FC<CardsContainerProps> = ({setRedemptionIntents}) => {
    const [ amountToRedeem, setAmountToRedeem ] = useState<string>('')
    const [ balanceInfo, setBalanceInfo ] = useState<UserBalanceData>({
        depositBalance: 0,
        lastUpdatedAt: '',
        message: '',
        totalBalance: 0,
        userId: 0,
        winBalance: 0,
    })
    
    const createRedemptionRequestObject = {
        userId: USER_ID,
        amount: parseInt(amountToRedeem)
    }

    const displayError = (error: RequestError | string) => {
        if (typeof error === 'string') {
            alert(error)
        } else {
            alert(error.message)
        }
    }

    const maxRedeem = (): void => {
        if (balanceInfo && balanceInfo.winBalance) {
            if (parseInt(amountToRedeem) !== balanceInfo.winBalance) {
                setAmountToRedeem(balanceInfo.winBalance.toString())
            }
        }
    }

    const onAmountToRedeemChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target
        const regex = /^\d*\.?\d{0,2}$/

        if (regex.test(value)) {
            setAmountToRedeem(value)
        }
    }
    
    const initializeData = () => {
        getBalance(GET_BALANCE_REQUEST_OBJECT, response => setBalanceInfo(response), error => displayError(error))
        retrieveRedemption(RETRIEVE_REDEMPTION_REQUEST_OBJECT, response => setRedemptionIntents(response), error => displayError(error))
    }

    const redeemNow = () => {
        const amount = parseInt(amountToRedeem)
        if (amount < 10) {
            displayError('Redeemable amount must be greater than 10.')
        } else if (amount > balanceInfo.winBalance) {
            displayError('Redeemable amount must be lower than your win balance.')
        } else {
            createRedemption(createRedemptionRequestObject, () => {
                initializeData()
                setAmountToRedeem('')
            }, error => displayError(error))
        }
    }
    
    useEffect(() => initializeData(), [])

    return (
        <div className="balance-card-content">

            <InnerCard title='Sweeps balance breakdown'>
                <div className="cards-container-content-left-card-container-middle-section">
                    
                    <div className="cards-container-content-left-card-container-middle-section-line">
                        <p className="cards-container-content-left-card-container-middle-section-line-title">Win balance (REDEEMABLE):</p>
                        <div className="sweeps-balance-info-container">
                            <p className="sweeps-balance-info-container-value">{balanceInfo.winBalance}</p>
                            <img style={{width: '1.429rem', height: '1.429rem'}} src='sweeps-icon.svg' alt='Example SVG'/>
                        </div>
                    </div>

                    <hr className="divider"/>

                    <div className="cards-container-content-left-card-container-middle-section-line">
                        <p className="cards-container-content-left-card-container-middle-section-line-title">DEPOSIT BALANCE</p>
                        <div className="sweeps-balance-info-container">
                            <p className="sweeps-balance-info-container-value">{balanceInfo.depositBalance}</p>
                            <img style={{width: '1.429rem', height: '1.429rem'}} src='sweeps-icon.svg' alt='Example SVG'/>
                        </div>
                    </div>

                </div>

                <div className="cards-container-content-left-card-container-bottom-section">
                    <p className="cards-container-content-left-card-container-bottom-section-line">Total balance<span className="char">:</span></p>
                
                    <div className="sweeps-balance-info-container">
                        <p className="sweeps-balance-info-container-value">{balanceInfo.totalBalance}</p>
                        <img style={{width: '1.429rem', height: '1.429rem'}} src='sweeps-icon.svg' alt='Example SVG'/>
                    </div>
                </div>
            </InnerCard>


            <InnerCard title='Redeem here'>
                <div className="redeem-wrapper">
                    <div className="redeem-wrapper-amount-container">
                        <div className="redeem-currency">
                            <p className="redeem-wrapper-p">Coin</p>
                            <div className="type-of-redeems-container">
                                <div className="type-of-redeems-container-inner">
                                    <img className="type-of-redeems-container-inner-svg" src='sweeps-icon.svg' alt='Example SVG'/>
                                    <p className="redeem-wrapper-p">Sweeps</p>
                                </div>
                            </div>
                        </div>

                        <div className="redeem-action-wrapper">
                            <div className="redeem-header">
                                <p className="redeem-wrapper-p">Enter your amount</p>
                                <p className="redeem-wrapper-p-two">(Minim 10 SC)</p>
                            </div>

                            <div className="redeem-input-wrapper">
                                <input
                                    className="redeem-input"
                                    type="number"
                                    step="1"
                                    min="10"
                                    placeholder="0.00"
                                    max={balanceInfo.winBalance}
                                    value={amountToRedeem}
                                    onChange={onAmountToRedeemChange}
                                />
                                <button className="set-redeem-btn" onClick={maxRedeem}>
                                    <p className="set-redeem-btn-text">Max</p>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <button className="redeem-now-btn" onClick={redeemNow}>
                        <p className="redeem-now-btn-text">Redeem Now</p>
                    </button>
                </div>
            </InnerCard>
            
        </div>
    )
}

export default BalanceCardContent