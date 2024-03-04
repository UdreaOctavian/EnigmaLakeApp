import { RedemptionData } from "../utils/types"
import BalanceCardContent from "./BalanceCardContent"
import BalanceCardHeader from "./BalanceCardHeader"

type CardsContainerProps = {
  setRedemptionIntents: (redemptionIntents: RedemptionData[]) => void;
}

const BalanceCard: React.FC<CardsContainerProps> = ({setRedemptionIntents}) => {
  return (
    <div className="balance-card-container">
      <BalanceCardHeader />

      <BalanceCardContent setRedemptionIntents={setRedemptionIntents}/>
    </div>
  )
}

export default BalanceCard