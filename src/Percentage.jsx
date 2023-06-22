import Header from "./Header";
import Input from "./Input";

const selectOptions = [
  {
    option: 'Dissatisfied',
    percentage: 0
  },
  {
    option: 'It was okay',
    percentage: 5
  },
  {
    option: 'It was good',
    percentage: 10
  },
  {
    option: 'Amazing!',
    percentage: 20
  },
]

export default function Percentage({onSelectedOptionChange}) {
  return <>
    <Header>How did you like the service?</Header>
    <Input type='select' selectOptions={selectOptions} onSelectedOptionChange={onSelectedOptionChange}></Input>
  </>
}