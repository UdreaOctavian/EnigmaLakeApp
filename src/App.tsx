import { useState } from 'react'
import './styles/App.scss'
import { RedemptionData } from './utils/types'
import BalanceCard from './components/BalanceCard'
import RedemptionsTable from './components/RedemptionsTable'

export default function App() {
  const [ redemptionIntents, setRedemptionIntents ] = useState<RedemptionData[]>([])

  return (
    <div className='app-container'>
      <BalanceCard setRedemptionIntents={setRedemptionIntents}/>

      <RedemptionsTable redemptionIntents={redemptionIntents}/>
    </div>
  )
}