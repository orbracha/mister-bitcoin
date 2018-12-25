import { action, observable } from 'mobx';
import BitcoinService from '../services/BitcoinService'

export default class CoinStore {
    @observable
    bitcoinRate = 0;

    @action
    getBitcoinRate(coins) {
        BitcoinService.getBitcoinRate(coins).then(bitcoinRate => {
            this.bitcoinRate = bitcoinRate
        })
    }
} 