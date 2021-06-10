import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownExampleSearchSelection = ({ label, onChange, options}) => (
  <Dropdown
    placeholder={label}
    fluid
    search
    selection
    onChange={onChange}
    options={options}
  />
)

export default DropdownExampleSearchSelection

