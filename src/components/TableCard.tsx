import { formatDate } from "../utils/helpers"

export default function TableCard({redemptionIntents}) {
  return (
    <div className="table-card-container">
        <div className="table-title">
            Redemptions
        </div>
        <div className="table-content">
            <div className="table-content-header">
                <div className="table-content-header-container">
                    <p className="table-content-header-container-element">Date</p>
                    <p className="table-content-header-container-element">Sweeps</p>
                    <p className="table-content-header-container-element">Amount</p>
                    <p className="table-content-header-container-element">Redemption Status</p>
                    <p className="table-content-header-container-element">Redeemable Sweeps</p>
                    <p className="table-content-header-container-element">Payment</p>
                </div>
            </div>

            <div className="table-content-rows">
                {
                    redemptionIntents && redemptionIntents.filter(value => value.amount < 7800).map((redemptionIntent, index) => (
                        <div className="table-content-rows-instances-container" key={index}>
                            <p className="table-content-rows-instance">{formatDate(redemptionIntent.createdAt)}</p>
                            <div className="table-content-rows-sweeps-data table-content-rows-instance">
                                <p>{redemptionIntent.amount}</p>
                                <img width='20' height='20' src='sweeps-icon.svg' alt='Example SVG'/>
                            </div>
                            <p className="table-content-rows-instance">{redemptionIntent.amount}</p>
                            <div className="table-content-rows-submitted-data table-content-rows-instance">
                                <div className="table-content-rows-submitted-data-bullet"></div>
                                <p>Submitted</p>
                            </div>
                            <p className="table-content-rows-instance">FUNDS_RESERVED</p>
                            <div className="table-content-rows-submitted-payment table-content-rows-instance">
                                <div className="table-content-rows-submitted-payment-bullet"></div>
                                <p>Pending</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}