import React from "react";
import styles from "../styles/UserPage.styles";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage = ({ role }) => {
  const navigate = useNavigate()
  const isAdmin = role === "admin";
  const isUser = role === "user";


  const onClickLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <div style={styles.flex}>
      {isAdmin && (
        <Link to="/user-list" style={styles.button}>
          User List
        </Link>
      )}
      {isUser && (
        <Link to="/profile" style={styles.button}>
          Profile
        </Link>
      )}
      <button onClick={onClickLogout} style={styles.button}>
        Logout
      </button>
      </div>
    </div>
  );
};

export default DashboardPage;
