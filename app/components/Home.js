import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    const {
      emailData,
      emailHtml,
      error
    } = this.props.rendering;

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>TechnoQueers Email Generator</h1>
          <h2>Drag data file onto window to generate</h2>
        </header>
        <textarea
          className={styles.text}
          value={emailHtml || error || 'Code will appear here'}
          readOnly={true}
        />
      </div>
    );
  }
}
