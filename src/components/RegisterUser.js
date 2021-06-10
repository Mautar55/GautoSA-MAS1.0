import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>DNI</label>
      <input placeholder='DNI' />
    </Form.Field>
    <Form.Field>
      <label>Nombre</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Apellido</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Button type='submit'>Registrarse</Button>
  </Form>
)

export default FormExampleForm