import React from 'react';
import imgAvatar from '../../assets/img_avatar.png'
import './ContactPreview.css'
import { Link } from 'react-router-dom';
const ContactPreview = ({ contact }) => {

  return (
    <div className="contact-preview">
      <Link to={`/contact/contact-details/${contact._id}`}>
        <img src={imgAvatar} alt="Person" width="96" height="96" />
        <span>{contact.name}</span>
      </Link>
    </div>
  )
}

export default ContactPreview;
