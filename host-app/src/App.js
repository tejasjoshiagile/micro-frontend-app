import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

const Login = React.lazy(() => import("authApp/Login"));

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handalLoginEvent = () => {
    console.log("User logged in notification received in host app");
    setIsLogin(true);
  };
  useEffect(() => {
    const handleLoginEvent = () => setIsLogin(true);

    const handleStorage = (e) => {
      if (e.key === "isLoggedIn") {
        setIsLogin(e.newValue === "true");
      }
    };

    window.addEventListener("login-success", handleLoginEvent);
    window.addEventListener("storage", handleStorage);

    setIsLogin(localStorage.getItem("isLoggedIn") === "true");

    return () => {
      window.removeEventListener("login-success", handleLoginEvent);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main-content app-shell">
        <section className="content-panel">
          <Suspense fallback={<div>Loading...</div>}>
            {!isLogin ? (
              <Login />
            ) : (
              <div className="login-success">User is logged in</div>
            )}
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
