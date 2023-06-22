import Bill from './Bill';
import Percentage from './Percentage';
import Summary from './Summary';
import Reset from './Reset';
import { useState } from 'react';



export default function App() {
  const [price, setPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleReset = () => {
    setPrice('');
    setSelectedOption(null);
  }

  return (
  <div className="app">
    <Bill price={price} onPriceChange={setPrice}/>
    <Percentage onSelectedOptionChange={setSelectedOption}/>
    <Summary price={price} selectedOption={selectedOption}/>
    <Reset onReset={handleReset}/>
  </div>
  )
}