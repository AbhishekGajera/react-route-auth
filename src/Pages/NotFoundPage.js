import React from 'react';
import styles from '../styles/UserPage.styles'

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
