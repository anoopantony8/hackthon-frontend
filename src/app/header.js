import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand logo_anaco">An<span>a</span>Co</a>
          </div>
        </div>
      </header>
    );
  }
}
