import React from "react";
import styles from "../styles/UserPage.styles";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Home page</h1>
      <p style={styles.text}>Welcome!!</p>
      <Link to="/login" style={styles.button}>
        Login
      </Link>
    </div>
  );
};

export default HomePage;
