import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function RegisterLoginForm() {
  const [showLogin, setShowLogin] = useState(false);

  function visibleFormToggle() {
    console.log(showLogin);
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
