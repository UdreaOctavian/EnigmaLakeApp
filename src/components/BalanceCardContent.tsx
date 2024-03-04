import { useEffect, useState } from "react"
import { createRedemption, getBalance, retrieveRedemption } from '../api/ApiRequests.js'
import { RequestError, RedemptionData, UserBalanceData } from "../utils/types.js";
import InnerCard from "./InnerCard.js";

type CardsContainerProps = {
    setRedemptionIntents: (redemptionIntents: RedemptionData[]) => void
}

const BalanceCardContent: React.FC<CardsContainerProps> = ({setRedemptionIntents}) => {
    const [ amountToRedeem, setAmountToRedeem ] = useState<number>(0)
    const [ balanceInfo, setBalanceInfo ] = useState<UserBalanceData>({
        depositBalance: 0,
        lastUpdatedAt: '',
        message: '',
        totalBalance: 0,
        userId: 0,
        winBalance: 0,
    })
    const USER_ID = 4
    const getBalanceRequestObject = {
        coinType: 0,
        userId: USER_ID
    }
    const createRedemptionRequestObject = {
        userId: USER_ID,
        amount: amountToRedeem
    }
    const retrieveRedemptionRequestObject = {
        userId: USER_ID
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
            if (amountToRedeem !== balanceInfo.winBalance) {
                setAmountToRedeem(balanceInfo.winBalance)
            }
        }
    }

    const onAmountToRedeemChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target
      
        if (!value) {
            setAmountToRedeem(0)
        } else {
            setAmountToRedeem(parseInt(value))
        }
    }
    
    const initializeData = () => {
        getBalance(getBalanceRequestObject, response => setBalanceInfo(response), error => displayError(error))
        retrieveRedemption(retrieveRedemptionRequestObject, response => setRedemptionIntents(response), error => displayError(error))
    }

    const redeemNow = () => {
        if (amountToRedeem < 10) {
            displayError('Redeemable amount must be greater than 10.')
        } else if (amountToRedeem > balanceInfo.winBalance) {
            displayError('Redeemable amount must be lower than your win balance.')
        } else {
            createRedemption(createRedemptionRequestObject, () => initializeData(), error => displayError(error))
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
                                    type="text"
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