import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto  text-center" style={styles.footer}>
        <div className="inner text-center" >
          <p className="inner" >© 2018 - Anaco@gmail.com </p>
        </div>
      </footer>
    );
  }
}
