import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function RegisterLoginForm() {
  const [showLogin, setShowLogin] = useState(false);

  function visibleFormToggle() {
    setShowLogin(!showLogin);
  }

  return (
    <>
      {showLogin ? (
        <LoginForm key="login" toggleForm={visibleFormToggle} />
      ) : (
        <RegisterForm key="register" toggleForm={visibleFormToggle} />
      )}
    </>
  );
}
