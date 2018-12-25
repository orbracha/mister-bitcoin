import './ContactDetails.scss'
import React, { Component } from 'react';
import TransferFund from '../../components/TransferFund'
import MovesList from '../../components/MovesList'
import imgAvatar from '../../assets/img_avatar.png'
import imgEdit from '../../assets/icons/edit.png'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react';

@inject('store')
class ContactDetails extends Component {

  state = { contact: {} }
  ContactStore = this.props.store.ContactStore
  UserStore = this.props.store.UserStore

  componentDidMount() {
    const { id } = this.props.match.params;
    this.ContactStore.getById(id).then(contact => {
      this.setState({ contact })
    })
  }

  addMove = (e) => {
    e.preventDefault()
    this.UserStore.addMove(this.state.contact, e.target[0].value);
  }
  render() {
    const { contact } = this.state
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-details">
        <div className="contact-details-body">
          <Link className="edit-link" to={`/contact/contact-edit/${contact._id}`}>
          <img src={imgEdit} alt="edit" />
          </Link>
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
        <hr/>
        <TransferFund addMove={this.addMove} />
        <hr/>
        <MovesList contact={contact} moves={this.UserStore.logginUser.move} />
      </div>
    )
  }

}

export default ContactDetails;
