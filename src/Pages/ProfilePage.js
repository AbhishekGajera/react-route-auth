import React from "react";
import styles from "../styles/UserPage.styles";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profile</h1>
      <p style={styles.text}>This is your profile page.</p>
      <Link to="/dashboard" style={styles.button}>
        Back
      </Link>
    </div>
  );
};

export default ProfilePage;
