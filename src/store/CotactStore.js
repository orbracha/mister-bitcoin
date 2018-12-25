import contactService from '../services/ContactService'
import { observable, action } from 'mobx';
export default class CotactStore {
    @observable
    contacts = [];
    constructor(root) {
        this.rootStore = root;
    }
    @action
    loadContacts(filter) {
        contactService.getContacts(filter).then(contacts => {
            this.contacts = contacts;
        })
    }

    @action
    getById(id) {
        return contactService.getContactById(id).then(contact => contact)
    }

    @action
    saveContact(contact) {
        return contactService.saveContact(contact).then(contact => contact)
    }
    @action
    deleteContact(id) {
        return contactService.deleteContact(id).then(contact => contact)
    }

} 