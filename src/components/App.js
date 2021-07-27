import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNewContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onClickDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          addNewContact={this.addNewContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter onHandleChange={this.onHandleChange} value={this.filter} />
        <ContactList
          onClickDeleteContact={this.onClickDeleteContact}
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </>
    );
  }
}

export default App;
