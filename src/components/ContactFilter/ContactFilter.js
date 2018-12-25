import React from 'react';
import './ContactFilter.scss'
const ContactFilter = (props) =>
    (
        <section className="filter">
            <input type="text" placeholder="Search..." onChange={props.onfilter} />
        </section>
    )


export default ContactFilter