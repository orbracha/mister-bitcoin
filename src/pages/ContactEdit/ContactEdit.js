import React, { Component } from 'react';
import imgAvatar from '../../assets/img_avatar.png'
import { inject } from 'mobx-react';
import './ContactEdit.scss'
import backImg from '../../assets/icons/back.png'
import delImg from '../../assets/icons/delete.png'

@inject('store')
class ContactEdit extends Component {

  state = { contact: { name: '', phone: '', email: '' } }
  ContactStore = this.props.store.ContactStore
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.ContactStore.getById(id).then(contact => {
        this.setState({ contact })
      })
    }
  }

  changeContact = (e) => {
    const param = e.target.name
    var contact = this.state.contact;
    contact[param] = e.target.value
    this.setState({
      contact
    })
  }

  saveContact = () => {
    if (this.state.contact.name && this.state.contact.phone && this.state.contact.email) {
      this.ContactStore.saveContact(this.state.contact).then(() => {
        this.props.history.push(`/contact/contact-details/${this.state.contact._id}`)
      })
    }
  }
  deleteContact = () => {
    this.ContactStore.deleteContact(this.state.contact._id).then(() => {
      var { history } = this.props
      history.push('/contact')
    })
  }
  onBackClicked = () => {
    const { contact } = this.state
    if (contact._id) {
      this.props.history.push(`/contact/contact-details/${contact._id}`)
    }
    else {
      this.props.history.push('/contact')
    }
  }
  render() {
    const { contact } = this.state
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-edit">
        <div className="btn-container">
          <button onClick={this.onBackClicked}>
            <img src={backImg} alt="back" />
          </button>
          {contact._id && <button onClick={this.deleteContact}>
            <img src={delImg} alt="delete" />
          </button>}
        </div>
        <div className="contact-edit-body">
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-edit-row">
            <span>Name:</span>
            <input type="text" value={contact.name} placeholder="Enter a name.." name="name" onChange={this.changeContact} />
          </div>
          <div className="contact-edit-row">
            <span>Phone:</span>
            <input type="text" value={contact.phone} placeholder="Enter a phone.." name="phone" onChange={this.changeContact} />
          </div>
          <div className="contact-edit-row">
            <span>Email:</span>
            <input type="email" value={contact.email} placeholder="Enter a email.." name="email" onChange={this.changeContact} required />
          </div>

          <button className="save-btn" onClick={this.saveContact}>Save</button>

        </div>
      </div>
    )
  }

}

export default ContactEdit;
