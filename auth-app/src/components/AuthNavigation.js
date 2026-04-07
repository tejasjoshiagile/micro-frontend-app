import React from "react";
import { NavLink } from "react-router-dom";

function AuthNavigation({ isForgotPassword }) {
  return (
    <div className="auth-navigation">
      <NavLink
        to="/login"
        className={`auth-link-button ${!isForgotPassword ? "is-active" : ""}`}
      >
        Login Screen
      </NavLink>
      <NavLink
        to="/forgot-password"
        className={`auth-link-button ${isForgotPassword ? "is-active" : ""}`}
      >
        Forgot Password Screen
      </NavLink>
    </div>
  );
}

export default AuthNavigation;
