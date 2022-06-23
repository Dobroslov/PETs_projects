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
    console.log('saveContact', {contactsData: {...this.state.contactsData, contact}});
    this.setState({contactsData: [...this.state.contactsData, contact
  ]})
  };

  handleToggleClickForm = () => {
    console.log('handleToggleClickForm');
  };

  render() {
    return (
      <div className='contacts-app'>
        <div className='table-contact'>
          <ContactList contacts={this.state.contactsData} />
        </div>
        <div className='form-contact'>
          <ContactForm onSaveContact={this.onSaveContact}
          onDeleteContact={this.onDeleteContact} />
        </div>
      </div>
    );
  }
}

// Книга контактов v2

// Интерфейс состоит из двух колонок:

// В левой отображаем список пользователей (имя, фамилия)

// Под списком отображается кнопка "Добавить пользователя"

// В правой форма добавления пользователя

// При клике на любого пользователя в списке, форма заполняется его данными. При клике на "Добавить пользователя" (которая находится под списком), форма заполняется пустыми значениями.

// Если форма отрыта для существующего пользователя из списка, можно что-то отредактировать в форме и нажать "Сохранить", в этом случае информация в списке должна обновится. Так в этом случае доступна кнопка "Удалить", которая удаляет выбранный контакт

// Работа с сервером
// https://jsonplaceholder.typicode.com/users

// Альтернатива
// https://www.mockapi.io/
