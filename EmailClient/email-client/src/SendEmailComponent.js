import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class SendEmailComponent extends Component {
  static propTypes = {
    sendEmail: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { 
      emailObj: {
        to: '',
        cc: '',
        subject: '',
        body: '',
      }};
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.getState()[`emailObj.${event.target.id.slice(event.target.id.lastIndexOf('-') + 1)}`] = event.target.value;
  }
  
  render() {
    return (
      <div className="col-md-5 col-md-offset-5 border-2">
        <div className="border-2">
          <FormGroup controlId='email-send-to' onChange={this.handleChangeEvent}>
            <ControlLabel>To</ControlLabel>
            <FormControl placeholder={this.state.emailObj.to} />
          </FormGroup>
          <FormGroup controlId='email-send-cc' onChange={this.handleChangeEvent}>
            <ControlLabel>CC</ControlLabel>
            <FormControl placeholder={this.state.emailObj.cc} />
          </FormGroup>
          <FormGroup controlId='email-send-subject' onChange={this.handleChangeEvent}>
            <ControlLabel>Subject</ControlLabel>
            <FormControl  placeholder={this.state.emailObj.subject} />
          </FormGroup>
          <FormGroup controlId='email-send-body' onChange={this.handleChangeEvent}>
            <ControlLabel>Body</ControlLabel>
            <FormControl componentClass="textarea" placeholder={this.state.emailObj.body} />
          </FormGroup>
          <Button bsStyle="primary" onClick={(data) => this.props.sendEmail(this.state.emailObj)}>Send Email</Button>
        </div>
      </div>
    );
  }
}

export default SendEmailComponent;
