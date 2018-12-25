import React, { Component } from 'react';
import ContactFilter from '../../components/ContactFilter'
import ContactList from '../../components/ContactList'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import addImg from '../../assets/icons/plus.png'
import './ContactPage.scss'

@inject('store')
@observer
class ContactPage extends Component {

  ContactStore = this.props.store.ContactStore
  async componentDidMount() {
    await this.ContactStore.loadContacts();
  }
  setFilter = async (e) => {
    await this.ContactStore.loadContacts({ term: e.target.value });
  }


  render() {
    return (
      <div className="contacts-page">
        <ContactFilter onfilter={this.setFilter} />
        <div className="contacts-container">
          {<ContactList contacts={this.ContactStore.contacts} />}
          <Link className="add-link" to='/contact/contact-edit'>
            <img src={addImg} alt="plus" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactPage;
