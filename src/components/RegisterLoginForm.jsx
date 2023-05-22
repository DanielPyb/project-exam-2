import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegLog/RegisterForm";
import LoginForm from "./RegLog/LoginForm";

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
      <Button variant="outline-primary" onClick={visibleFormToggle}>
        Change Form
      </Button>
    </>
  );
}
