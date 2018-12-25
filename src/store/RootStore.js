import CoinStore from './CoinStore'
import ContactStore from './CotactStore'
import UserStore from './UserStore'
export default class RootStore {


    constructor() {
        this.CoinStore = new CoinStore()
        this.ContactStore = new ContactStore()
        this.UserStore = new UserStore()
    }

} 