export default function Input({type, selectOptions, placeHolder, onPriceChange, onSelectedOptionChange, price}) {
  if (type === 'select') return (
  <select onChange={(e) => onSelectedOptionChange(Number(e.target.value))}>
    {selectOptions.map((option) => <option value={option.percentage}>{option.option} ({option.percentage}%)</option>)}
  </select>);


  return <input onChange={(e) => onPriceChange(Number(e.target.value))} type={type} placeholder={placeHolder} value={price}></input>
}