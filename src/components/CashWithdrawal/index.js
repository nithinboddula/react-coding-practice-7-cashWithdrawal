import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="container">
          <div className="name-container">
            <div className="starting-letter">S</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="rupee-container">
              <p className="rupees">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denomination={eachItem}
                onWithdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
