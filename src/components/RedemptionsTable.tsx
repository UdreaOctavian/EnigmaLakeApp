import { formatDate } from "../utils/helpers"
import { RedemptionData } from "../utils/types"

type TableCardProps = {
    redemptionIntents: RedemptionData[]
}

const RedemptionsTable: React.FC<TableCardProps> = ({redemptionIntents}) => {

    const tableColumnTitles = ['Date', 'Sweeps', 'Amount', 'Redemption Status', 'Redeemable Sweeps', 'Payment']

    return (
        <div className="table-container">
            <div className="table-title">Redemptions</div>
            
            <div className="table-content">
                <div className="table-header">
                    <div className="table-header-wrapper">
                        {
                            tableColumnTitles.map((title, index) => (
                                <p key={index} className="table-header-column-title">{title}</p>
                            ))
                        }
                    </div>
                </div>

                <div>
                    {
                        redemptionIntents && redemptionIntents.map((redemption, index) => (
                            <div className="table-row" key={index}>
                                <p className="table-data-cell">{formatDate(redemption.createdAt)}</p>

                                <div className="table-data-cell table-data-cell-sweeps">
                                    <p className="table-data-cell-sweeps-text">{redemption.amount}</p>
                                    <img style={{width: '1.25rem', height: '1.25rem'}} src='sweeps-icon.svg' alt='Example SVG'/>
                                </div>

                                <p className="table-data-cell">${redemption.amount}</p>
                                
                                <div className="table-data-cell table-data-cell-status">
                                    <div className="table-data-cell-status-bullet"></div>
                                    <p className="table-data-cell-status-text">Submitted</p>
                                </div>

                                <p className="table-data-cell">FUNDS_RESERVED</p>
                                
                                <div className="table-data-cell table-data-cell-payment">
                                    <div className="table-data-cell-payment-bullet"></div>
                                    <p className="table-data-cell-payment-text">Pending</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RedemptionsTable