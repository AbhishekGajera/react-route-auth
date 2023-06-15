import React from 'react';
import styles from '../styles/UserPage.styles'
import { Link } from "react-router-dom";

const UserListPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User List</h1>
      <p style={styles.text}>This is the list of users.</p>
      <Link to="/dashboard" style={styles.button}>
        Back
      </Link>
    </div>
  );
};

export default UserListPage;
