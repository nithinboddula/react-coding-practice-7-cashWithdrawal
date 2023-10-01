import './index.css'

const DenominationItem = props => {
  const {denomination, onWithdraw} = props
  const {value} = denomination

  const withdrawMoney = () => {
    onWithdraw(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={withdrawMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
