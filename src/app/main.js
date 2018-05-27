import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Login} from './login';
import {browserHistory} from 'react-router';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  constructor(props) {
    super(props);
    this.handlePage = this.handlePage.bind(this);
  }
  handlePage(event) {
    console.log(event.target.id);
    if (event.target.id === 'signup') {
      // this.setState({login: false});
      browserHistory.push('/signUp');
    } else {
      browserHistory.push('/');
      // this.setState({login: true});
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#" id="signup" onClick={this.handlePage}>Sign Up </a></li>
            <li><a href="#" id="login" onClick={this.handlePage}>Login</a></li>
          </ul>
          <Login/>
        </main>
        <Footer/>
      </div>
    );
  }
}
