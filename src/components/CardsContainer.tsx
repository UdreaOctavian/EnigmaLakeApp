import CardsContainerContent from "./CardsContainerContent"
import CardsContainerHeader from "./CardsContainerHeader"

export default function CardsContainer({setRedemptionIntents}) {
  return (
    <div className="cards-container">
      <CardsContainerHeader />

      <CardsContainerContent setRedemptionIntents={setRedemptionIntents}/>
    </div>
  )
}