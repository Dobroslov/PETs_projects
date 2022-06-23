import React, { Component } from 'react';
import ContactListItem from '../contact-list-item/contact-list-item';

import './contact-list.css';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul className="list-group">
        {contacts.map((item) => (
          <ContactListItem key={item.id} contact={item} />
        ))}
      </ul>
    );
  }
}
