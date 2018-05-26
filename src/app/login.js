import React, {Component} from 'react';
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
    const apiBaseUrl = 'http://192.168.0.41:8080/api/users/login';
    // var self = this;
    const payload = {
      email: this.state.email,
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
      mode: 'no-cors',
      crossDomain: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchParams
    }).then(function (response) {
      console.log(response.json());
      if (response.data.code === 200) {
        console.log('Login successfull');
        // var uploadScreen = [];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
      } else if (response.data.code === 204) {
        // console.log('Username password do not match');
        this.setState({errorMessage: 'username password do not match'});
      } else {
        console.log('Username does not exists');
        this.setState({errorMessage: 'Username does not exist'});
      }
      console.log(this.state.errorMessage);
    });
    // axios.post({
    //   method: 'post',
    //   mode: 'no-cors',
    //   url: apiBaseUrl,
    //   data: searchParams,
    //   crossDomain: true,
    //   config: {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //     }
    //   }
    // }).then(function (response) {
    //   console.log(response);
    //   if (response.data.code === 200) {
    //     console.log('Login successfull');
    //     // var uploadScreen = [];
    //     // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    //     // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    //   } else if (response.data.code === 204) {
    //     // console.log('Username password do not match');
    //     this.setState({errorMessage: 'username password do not match'});
    //   } else {
    //     console.log('Username does not exists');
    //     this.setState({errorMessage: 'Username does not exist'});
    //   }
    // });
      // .catch(function (error) {
      //   console.log(error);
      // });
  }

  render() {
    return (
      <div className="container login-form">
        <div className="card card-container">

          <h2 className="login_heaing text-center"> Login </h2>
          <p className="login_bottm text-center">New to anaco?<a href=""> Sign Up </a></p>

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
