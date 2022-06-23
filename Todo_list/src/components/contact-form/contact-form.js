import React, { Component } from 'react';

import './contact-form.css';

export default class ContactForm extends Component {
  state = {
    values: {
      name: '',
      surname: '',
      phone: '',
      age: '',
    },
    name: '',
    surname: '',
    phone: '',
    age: '',
  };

  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ values: { ...this.state.values, [name]: value } });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSaveContact({ ...this.state.values, id: Date.now() });

    this.setState({ values: { name: '', surname: '', phone: '', age: '' } });
  };

  onDeleteContact = (e) => {
    e.stopPropagation();
    console.log('onDeleteContact', this.props.onDeleteContact);
  };

  render() {
    const { values } = this.state;
    return (
      <div className='input-group input-group-sm mb-3 form'>
        <h2>Подробно о контакте</h2>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor='name'>Имя</label>
          <input
            name='name'
            type='text'
            value={values.name}
            placeholder='Введите имя..'
            className='form-control'
            onChange={this.onInputChange}
          />
          <label htmlFor='surname'>Фамилия</label>
          <input
            name='surname'
            type='text'
            placeholder='Введите фамилию..'
            className='form-control'
            value={values.surname}
            onChange={this.onInputChange}
          />
          <label htmlFor='phone'>Телефон</label>
          <input
            name='phone'
            type='tel'
            placeholder='Введите телефон..'
            className='form-control'
            value={values.phone}
            onChange={this.onInputChange}
          />
          <label htmlFor='age'>Возрост</label>
          <input
            name='age'
            type='text'
            placeholder='Введите возрост..'
            className='form-control'
            value={values.age}
            onChange={this.onInputChange}
          />

          <button type='submit' className='btn btn-success'>
            Сохранить
          </button>
        </form>
        <button className='btn btn-secondary' onClick={this.onDeleteContact}>
          Удалить
        </button>
      </div>
    );
  }
}
