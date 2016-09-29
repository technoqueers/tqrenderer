import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          TechnoQueers Email Generator
        </header>
        <textarea
          className={styles.text}
        />
      </div>
    );
  }
}
