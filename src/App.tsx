import './styles/App.scss'
import CardsContainer from './components/CardsContainer'
import { useEffect, useState } from 'react'
import TableCard from './components/TableCard'

export default function App() {

  const [ redemptionIntents, setRedemptionIntents ] = useState([])

  useEffect(() => {
    // Function to handle resize event
    const handleResize = () => {
      // Do something when the window is resized
      console.log('Window resized');
      console.log(window.innerHeight);
      console.log(window.innerWidth);
    };

    // Add event listener to the window
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className='main-container'>
      <CardsContainer setRedemptionIntents={setRedemptionIntents}/>

      <TableCard redemptionIntents={redemptionIntents}/>
    </div>
  )
}