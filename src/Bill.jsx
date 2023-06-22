import Header from './Header';
import Input from './Input';

export default function Bill({onPriceChange, price}) {
  return <>
    <Header>How much was the bill?</Header>
    <Input price={price} onPriceChange={onPriceChange} type='number' placeHolder='$'/>
  </>
}