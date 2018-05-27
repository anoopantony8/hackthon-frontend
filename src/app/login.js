import React, {Component} from 'react';
// import axios from 'axios';
// import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './login.css';
import {Home} from './home';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loginPage: true
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
    const apiBaseUrl = 'http://206.189.147.1:8080/api/users/login';
    const self = this;
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
            self.setState({loginPage: false});
            localStorage.setItem('token', data.user.token);
          }
          // var uploadScreen = [];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
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
    let page = (
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
    if (this.state.loginPage === false) {
      page = <Home/>;
    }
    return (
      <div>
        {page}
      </div>
    );
  }
}
