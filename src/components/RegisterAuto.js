import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Patente</label>
      <input placeholder='Patente' />
    </Form.Field>
    <Form.Field>
      <label>Marca</label>
      <input placeholder='Marca' />
    </Form.Field>
    <Form.Field>
      <label>Modelo</label>
      <input placeholder='Modelo' />
    </Form.Field>
    <Button type='submit'>Registrarse</Button>
  </Form>
)

export default FormExampleForm