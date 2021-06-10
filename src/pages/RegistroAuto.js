import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import FormAuto from '../components/RegisterAuto'
import Date1 from '../components/date'

function RegisterAuto() {
  
  return (
    <>
      <Container>
        <h2>Registro</h2>
        <Date1></Date1>
        <FormAuto></FormAuto>
      </Container>
    </>
  );
}

export default RegisterAuto;