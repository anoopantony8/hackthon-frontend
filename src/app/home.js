import React, {Component} from 'react';
import './home.css';
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
export class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <p>Welcome</p>
      </div>
    );
  }

}
