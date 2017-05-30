import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import 'whatwg-fetch';
import SendEmailComponent from './SendEmailComponent.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail(data) {
    const url = 'http://localhost:8080/sendemail'
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost"
      }
    }).then(function(response) {
      response.status     //=> number 100–599
      response.statusText //=> String
      response.headers    //=> Headers
      response.url        //=> String
      return response.text()
    }, function(error) {
      error.message //=> String
    })
  }
  
  render() {
    const sendemail = this.sendEmail;
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Send Email App</h2>
        </div>
        <SendEmailComponent sendEmail={sendemail}/>
      </div>

    );
  }
}

export default App;
