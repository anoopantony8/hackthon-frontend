import React, {Component} from 'react';
// import axios from 'axios';
// import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './login.css';

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick() {
    const apiBaseUrl = 'http://206.189.147.1:8080/api/users';
    // var self = this;
    const payload = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    // const formData = new FormData();
    // if (payload) {
    //   for (const k in payload) {
    //     formData.append(k, payload[k]);
    //   }
    // }
    const searchParams = Object.keys(payload).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');
    console.log(apiBaseUrl, payload);
    fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchParams
    }).then(resp => resp.json())
      .then(function (data) {
        console.log(data);
        if (data) {
          console.log('Login successfull');
          if (data.errors) {
            console.log(data.errors);
            this.setState({errorMessage: 'Email does not exist or password is incorrect'});
          }
          if (data.user) {
            console.log(data.user.token);
            localStorage.setItem('token', data.user.token);
          }
          // var uploadScreen = [];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
      });
  }

  render() {
    return (
      <div className="container login-form">
        <div className="card card-container">

          <h2 className="login_heaing text-center"> Signup </h2>

          <form className="form-signin" onSubmit={this.handleSubmit}>
            <p className="input_title"> Username </p>
            <input
              type="text"
              autoFocus
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              />
            <p className="input_title"> Email </p>
            <input
              type="email"
              autoFocus
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
            <p className="input_title">Password</p>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              />
            <div>
              &nbsp;
            </div>
            <button
              className="btn btn-block btn-signin"
              type="submit"
              onClick={this.handleClick}
              >
              Create Account</button>
            {this.state.errorMessage}
          </form>
        </div>
      </div>
    );
  }
}
