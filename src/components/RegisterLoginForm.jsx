import React, { useState } from 'react'
import {Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import RegisterForm from './RegLog/RegisterForm'
import LoginForm from './RegLog/LoginForm';


export default function RegisterLoginForm() {
    const [visibleForm, setVisibleForm] = useState(<RegisterForm toggleForm={visibleFormToggle}/>);
    
    function visibleFormToggle(){
        if (visibleForm.key == "login")
        setVisibleForm(<RegisterForm key="register" toggleForm={visibleFormToggle}/>);
        else{
            setVisibleForm(<LoginForm key="login" toggleForm={visibleFormToggle} />);
        }
    }

    return(
        <>
        {visibleForm}
        <Button variant='outline-primary' onClick={visibleFormToggle}>Change Form</Button>
        </>
    )
}
