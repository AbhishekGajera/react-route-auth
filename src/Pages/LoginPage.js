import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/UserPage.styles'

const LoginPage = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault()
    // authentication logic

    // Assuming the user and admin have static credentials
    if (username === 'user' && password === 'user') {
      setRole('user');
      navigate('/dashboard');
    } else if (username === 'admin' && password === 'admin') {
      setRole('admin');
      navigate('/dashboard');
    } else {
      // Handle invalid credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
