import React from "react";

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  registerProps,
  errorMessage,
  autoComplete,
}) {
  return (
    <div className="auth-form-field">
      <label htmlFor={id} className="auth-form-field__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`auth-form-field__input${errorMessage ? " is-error" : ""}`}
        {...registerProps}
      />
      {errorMessage ? (
        <p className="auth-form-field__error">{errorMessage}</p>
      ) : null}
    </div>
  );
}

export default FormField;
