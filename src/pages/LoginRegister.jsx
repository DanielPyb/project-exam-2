import React, { useEffect, useRef } from 'react'
import RegisterLoginForm from '../components/RegLog/RegisterLoginForm'

export default function LoginRegister() {
  const logregFormRef = useRef(null);

  useEffect(() => {
    logregFormRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={logregFormRef} id='logreg-form'>
      <RegisterLoginForm />
    </div>
  )
}