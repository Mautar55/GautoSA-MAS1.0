import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import FormUser from '../components/RegisterUser'
import Date1 from '../components/date'

function Register() {
  
  return (
    <>
      <Container>
        <h2>Registro</h2>
        <Date1></Date1>
        <FormUser></FormUser>
      </Container>
    </>
  );
}

export default Register;
