import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    console.log('state form', this.state);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name..."
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label className={s.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number..."
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button className={s.button}>Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
