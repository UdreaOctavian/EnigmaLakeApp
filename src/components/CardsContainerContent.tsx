import { useEffect, useState } from "react"
import { createRedemption, getBalance, retrieveRedemption } from '../api/ApiRequests.js'

export default function CardsContainerContent({setRedemptionIntents}) {
    const [ amountToRedeem, setAmountToRedeem ] = useState(0)
    const [ balanceInfo, setBalanceInfo ] = useState({
        depositBalance: null,
        lastUpdatedAt: '',
        message: '',
        totalBalance: null,
        userId: null,
        winBalance: null,
    })

    const maxRedeem = () => {
        if (balanceInfo.winBalance) {
            if (amountToRedeem !== balanceInfo.winBalance) {
                setAmountToRedeem(balanceInfo.winBalance)
            }
        }
    }
    
    const onAmountToRedeemChange = (event) => {
        const { value } = event.target
        
        if (!value) {
            setAmountToRedeem(0)
        } else {
            setAmountToRedeem(parseInt(value))
        }
    }
    
    const redeemNow = () => {
        console.log(amountToRedeem)
        createRedemption({userId: 6, amount: amountToRedeem}, response => {
            console.log(response)
            retrieveRedemption({userId: 6}, response => setRedemptionIntents(response), error => console.log(error))
        }, error => console.log(error))
    }
    
    useEffect(() => {
        getBalance({coinType: 0, userId: 6}, response => setBalanceInfo(response), error => console.log(error))
    
        retrieveRedemption({userId: 6}, response => setRedemptionIntents(response), error => console.log(error))
    }, [])

    return (
        <div className="cards-container-content">
                
            {/* LEFT CARD */}
            <div className="cards-container-content-left-card-container">
            
                {/* TOP section of the card */}
                <div className="cards-container-content-left-card-container-top-section">
                    <p>Sweeps balance breakdown</p>
                </div>

                {/* MIDDLE section of the card */}
                <div className="cards-container-content-left-card-container-middle-section">
                    <div className="cards-container-content-left-card-container-middle-section-line">
                        <p className="cards-container-content-left-card-container-middle-section-line-title">Win balance (REDEEMABLE):</p>
                        <div className="sweeps-balance-info-container">
                            <p className="sweeps-balance-info-container-value">{balanceInfo.winBalance}</p>
                            <img width='22.86' height='22.86' src='sweeps-icon.svg' alt='Example SVG'/>
                        </div>
                    </div>

                    <hr className="divider"/>

                    <div className="cards-container-content-left-card-container-middle-section-line">
                        <p className="cards-container-content-left-card-container-middle-section-line-title">DEPOSIT BALANCE</p>
                        <div className="sweeps-balance-info-container">
                            <p className="sweeps-balance-info-container-value">{balanceInfo.depositBalance}</p>
                            <img width='22.86' height='22.86' src='sweeps-icon.svg' alt='Example SVG'/>
                        </div>
                    </div>
                </div>

                {/* BOTTOM section of the card */}
                <div className="cards-container-content-left-card-container-bottom-section">
                    <p className="cards-container-content-left-card-container-bottom-section-line">Total balance<span className="char">:</span></p>
                
                    <div className="sweeps-balance-info-container">
                        <p className="sweeps-balance-info-container-value">{balanceInfo.totalBalance}</p>
                        <img width='22.86' height='22.86' src='sweeps-icon.svg' alt='Example SVG'/>
                    </div>
                </div>

            </div>

            {/* RIGHT CARD */}
            <div className="cards-container-content-right-card-container">
                
                {/* TOP SECTION OF THE CARD */}
                <div className="cards-container-content-left-card-container-top-section">
                    <p>Sweeps balance breakdown</p>
                </div>

                {/* BOTTOM SECTION OF THE CARD */}
                <div className="cards-container-content-right-card-container-bottom-section">
                    
                    {/* top part */}
                    <div style={{display: 'flex', gap: '16px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <p className="my-paragraph">Coin</p>
                            <div style={{width: '187px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '13px 12px', backgroundColor: '#254673', borderRadius: '100px'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <img width='27.45' height='27.45' src='sweeps-icon.svg' alt='Example SVG'/>
                                    <p className="my-paragraph">Sweeps</p>
                                </div>
                            </div>
                        </div>

                        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <div style={{flex: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <p className="my-paragraph">Enter your amount</p>
                                <p className="my-paragraph-two">(Minim 10 SC)</p>
                            </div>

                            <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#0C1F3A',
                                    borderRadius: '100px',
                                    padding: '9px 9px 9px 16px',
                                    boxShadow: 'inset 0 0 0 1px #2B4C79'
                                }}
                            >
                                <input
                                    type="text"
                                    value={amountToRedeem}
                                    onChange={onAmountToRedeemChange}
                                    style={{
                                        width: 'fit-content',
                                        outline: 'none',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        lineHeight: '145%',
                                        backgroundColor: 'transparent'

                                    }}
                                />
                                <button onClick={maxRedeem}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '55.48px',
                                        height: '30.48px',
                                        padding: '7.62px 15.24px',
                                        borderRadius: '38.1px',
                                        backgroundColor: '#1967DC',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <p
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '12px',
                                            lineHeight: '150%'
                                        }}
                                    >
                                        Max
                                    </p>
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    {/* bottom part */}
                    <button className="redeem-now-btn" onClick={redeemNow}>
                        <p className="redeem-now-btn-text">Redeem Now</p>
                    </button>
                </div>
            </div>
        </div>
    )
}