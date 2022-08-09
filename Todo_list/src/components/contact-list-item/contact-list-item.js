import React, { Component } from 'react';

import './contact-list-item.css';

export default class ContactListItem extends Component {
  onContactClick = (e) => {
    console.log('onContactClick', e);
  };

  render() {
    const { contact } = this.props;
    // console.log(contact);
    return (
      <div className='contact-card'>
        <div className='card-content'>
          
        </div>
        <li className='list-group-item' onClick={this.onContactClick}>
          {`${contact.name} ${contact.surname}`}
        </li>
      </div>
    );
  }
}
