import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';

class App extends Component {
  state = {
    fiveContacts: contacts.splice(0, 5)
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
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
              this.state.fiveContacts.map((contact, index) => {
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
