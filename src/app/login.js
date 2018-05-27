import React, {Component} from 'react';
import {browserHistory} from 'react-router';
// import axios from 'axios';
// import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './login.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePage = this.handlePage.bind(this);
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

  handlePage() {
    console.log('------------');
  }

  handleClick() {
    const apiBaseUrl = 'http://192.168.0.41:8000/api/users/login';
    const self = this;
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    const searchParams = Object.keys(payload).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');
    console.log(apiBaseUrl, payload);
    fetch(apiBaseUrl, {
      method: 'POST',
      // mode: 'no-cors',
      // crossDomain: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchParams
    }).then(resp => resp.json())
      .then(data => {
        console.log(data);
        if (data) {
          console.log('Login successfull');
          if (data.errors) {
            console.log(data.errors);
            self.setState({errorMessage: 'Email does not exist or password is incorrect'});
          }
          if (data.user) {
            console.log(data.user.token);
            browserHistory.push('/home');
            localStorage.setItem('token', data.user.token);
          }
        }
      });
  }

  render() {
    return (
      <div className="container login-form">
        <div className="card card-container">

          <h2 className="login_heaing text-center"> Login </h2>
          <p className="login_bottm text-center">New to anaco?<a href=""onClick={this.handlePage}> Sign Up </a></p>

          <form className="form-signin" onSubmit={this.handleSubmit}>
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
            <div className="remember">
              <label><input
                className="label"
                type="checkbox"
                value="remember-me"
                />
                Remember me</label>
              <a href="#" className="forgot-password" >
                Forgot the password?
              </a>
            </div>
            <button
              className="btn btn-block btn-signin"
              type="submit"
              onClick={this.handleClick}
              >
              Sign in</button>
            {this.state.errorMessage}
          </form>
        </div>
      </div>
    );
  }
}
