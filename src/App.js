import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';

class App extends Component {
  state = {
    myContacts: contacts.splice(0, 5),
    contacts
  }

  handleNewRandomContact = (contact) => {
    const { contacts, myContacts } = this.state
    const randomIndex = Math.floor(Math.random() * contacts.length - 1);
    const newContact = contact[randomIndex]

    const newMyContacts = [...myContacts]
    newMyContacts.push(newContact)

    this.setState({
      myContacts: newMyContacts
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onclick={this.handleNewRandomContact}>Add random contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.myContacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                    <td><p>{contact.name}</p></td>
                    <td><p>{contact.popularity}</p></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
