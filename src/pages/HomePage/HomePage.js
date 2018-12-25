import React, { Component } from 'react';
import coinsImg from '../../assets/icons/coins.png'
import bitcoinImg from '../../assets/icons/bitcoin.png'
import { inject, observer } from 'mobx-react';
import './HomePage.scss'

@inject('store')
@observer
class HomePage extends Component {
  CoinStore = this.props.store.CoinStore
  user = this.props.store.UserStore.logginUser

  async componentDidMount() {
    await this.CoinStore.getBitcoinRate(this.user.coins)
  }

  render() {
    return (
      <div className="home-page">
        <div className="user-details">
          {this.user && <div className="user-name">Hello {this.user.name}!</div>}
          {this.user && <div className="user-coins-count">
            <img src={coinsImg} alt="coins" width="24px" height="24px" /> Coins: {this.user.coins}
          </div>}
          <div className="user-coins-rate">
            <img src={bitcoinImg} alt="bitcoin" width="24px" height="24px" /> BTC: {this.CoinStore.bitcoinRate}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
