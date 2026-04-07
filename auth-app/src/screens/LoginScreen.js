import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import FormField from "../components/FormField";
import { loginWithEmailPassword } from "../services/authService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginScreen() {
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    const result = await loginWithEmailPassword(values);
    if (result.success) {
      setServerMessage(`Welcome back, ${values.email}`);
    }
  };

  const submitLogin = handleSubmit(onSubmit);

  const goToForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <AuthCard
      title="Sign In"
      subtitle="Use your account to continue to the host app."
    >
      <form className="auth-form" onSubmit={submitLogin} noValidate>
        <FormField
          id="login-email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          registerProps={register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Enter a valid email address",
            },
          })}
          errorMessage={errors.email?.message}
        />
        <FormField
          id="login-password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          registerProps={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          errorMessage={errors.password?.message}
        />
        <button
          type="submit"
          className="auth-primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <button
        type="button"
        className="auth-link-button"
        onClick={goToForgotPassword}
      >
        Forgot password?
      </button>
      {serverMessage ? (
        <p className="auth-feedback success">{serverMessage}</p>
      ) : null}
    </AuthCard>
  );
}

export default LoginScreen;
