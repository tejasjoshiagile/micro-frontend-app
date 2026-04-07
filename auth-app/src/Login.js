import React from "react";
import "./App.css";
import {
  MemoryRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import LoginScreen from "./screens/LoginScreen";

function LoginLayout({ children }) {
  const location = useLocation();

  return (
    <div className="auth-page">
      <div className="auth-page__container">
        <p className="auth-page__eyebrow">RJS Auth</p>
        <h1 className="auth-page__title">Secure account access</h1>
        <p className="auth-page__subtitle">
          Sign in with email and password, or request a reset link.
        </p>
        {children}
      </div>
    </div>
  );
}

function Login() {
  return (
    <MemoryRouter initialEntries={["/login"]}>
      <LoginLayout>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </LoginLayout>
    </MemoryRouter>
  );
}

export default Login;
