import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import FormField from "../components/FormField";
import { requestPasswordReset } from "../services/authService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    const result = await requestPasswordReset(values);
    if (result.success) {
      setStatusMessage(result.message);
    }
  };

  const submitReset = handleSubmit(onSubmit);

  const goBackToLogin = () => {
    navigate("/login");
  };

  return (
    <AuthCard
      title="Forgot Password"
      subtitle="Enter your email and we will send a reset link."
    >
      <form className="auth-form" onSubmit={submitReset} noValidate>
        <FormField
          id="forgot-email"
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
        <button
          type="submit"
          className="auth-primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending link..." : "Send Reset Link"}
        </button>
      </form>
      <button
        type="button"
        className="auth-link-button"
        onClick={goBackToLogin}
      >
        Back to login
      </button>
      {statusMessage ? (
        <p className="auth-feedback success">{statusMessage}</p>
      ) : null}
    </AuthCard>
  );
}

export default ForgotPasswordScreen;
