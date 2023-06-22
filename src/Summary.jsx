export default function Summary({price, selectedOption}) {
  if (!price || !selectedOption) return;

  const tip = price / 100 * selectedOption
  const priceWithTip =  tip + price;
  return <p>You pay {priceWithTip} (${price} + ${Math.round(tip)} tip)</p>
}