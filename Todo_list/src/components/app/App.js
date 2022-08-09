import React, { Component } from 'react';
import ContactForm from '../contact-form/contact-form';
import ContactList from '../contact-list/contact-list';

import './App.css';

export default class App extends Component {
  state = {
    contactsData: [
      {
        name: 'Vova',
        surname: 'Gaylord',
        age: 96239,
        phone: '847-445-2648',
        id: '3',
      },
      {
        name: 'Terry',
        surname: 'Breitenberg',
        age: 85285,
        phone: '568-793-6486',
        id: '4',
      },
      {
        name: 'Hayley',
        surname: 'Powlowski',
        age: 74971,
        phone: '621-386-2041',
        id: '5',
      },
    ],
  };

  onDeleteContact = (id) => {
    console.log('deleteContact', id);
  };

  onSaveContact = (contact) => {
    console.log('saveContact', {
      contactsData: { ...this.state.contactsData, contact },
    });
    this.setState({ contactsData: [...this.state.contactsData, contact] });
  };

  handleToggleClickForm = () => {
    console.log('handleToggleClickForm');
  };

  createContact = () => {};

  changeContact = () => {};

  render() {
    return (
      <div className='contacts-app'>
        <div className='table-contact'>
          <ContactList contacts={this.state.contactsData} />
        </div>
        <div className='form-contact'>
          <ContactForm
            onSaveContact={this.onSaveContact}
            onDeleteContact={this.onDeleteContact}
            onChangeContact={this.changeContact}
          />
        </div>
      </div>
    );
  }
}