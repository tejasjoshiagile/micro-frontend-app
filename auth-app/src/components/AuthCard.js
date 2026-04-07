import React from "react";

function AuthCard({ title, subtitle, children, footer }) {
  return (
    <section className="auth-card">
      <div className="auth-card__header">
        <h2 className="auth-card__title">{title}</h2>
        <p className="auth-card__subtitle">{subtitle}</p>
      </div>
      <div className="auth-card__body">{children}</div>
      {footer ? <div className="auth-card__footer">{footer}</div> : null}
    </section>
  );
}

export default AuthCard;
