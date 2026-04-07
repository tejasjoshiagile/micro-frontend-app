const LOGIN_EVENT = "login-success";

const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const loginWithEmailPassword = async ({ email, password }) => {
  await wait(450);

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("loggedInEmail", email);
  window.dispatchEvent(new Event(LOGIN_EVENT));

  return {
    success: true,
    user: {
      email,
      passwordLength: password.length,
    },
  };
};

const requestPasswordReset = async ({ email }) => {
  await wait(450);

  return {
    success: true,
    message: `Reset link sent to ${email}`,
  };
};

export { loginWithEmailPassword, requestPasswordReset };
