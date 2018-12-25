import UserService from '../services/UserService'
import { observable, action} from 'mobx';
export default class UserStore {
    @observable
    logginUser = null;


    @action
    setLogginUser(user) {
        UserService.setUser(user);
        this.logginUser = user;
    }
    @action
    loadUser() {
        this.logginUser = UserService.loadUser();
    }
    @action
    addMove(contact, amount) {
        this.logginUser = UserService.addMove(contact, amount);
    }

} 