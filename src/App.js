import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UsersListPage from "./Pages/UsersListPage";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";

const PrivateRoute = ({ children, allowedRoles, role }) => {
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  const [role, setRole] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (role) {
      localStorage.setItem("user", role);
    }
  }, [role]);
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setRole={setRole} />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedRoles={["user", "admin"]} role={role}>
              <DashboardPage role={role} />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-list"
          element={
            <PrivateRoute allowedRoles={["admin"]} role={role}>
              <UsersListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute allowedRoles={["user"]} role={role}>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
