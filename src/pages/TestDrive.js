import React, { useState, useEffect } from "react";
import { Container, Button, Label, Input, Form, Header, Icon, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
//import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import Date from '../components/dateTime'

function TestDrive() {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState('');
    const [datos, setDatos] = useState('');

    const marcaClicked = () => {
        setValue('');
    }
    const marcaOptions = [
        { key: 'af', value: 'Toyota', text: 'Toyota' },
        { key: 'ax', value: 'Ford', text: 'Ford' },
        { key: 'al', value: 'Renault', text: 'Renault' },
        { key: 'dz', value: 'Voskwagen', text: 'Voskwagen' },
        { key: 'as', value: 'Audi', text: 'Audi' },
    ];
    const fordOptions = [
        { key: 'af', value: 'Ecosport', text: 'Ecosport' },
        { key: 'ax', value: 'Escord', text: 'Escord' },
        { key: 'al', value: 'Fiesta', text: 'Fiesta' },
        { key: 'dz', value: 'Falcon', text: 'Falcon' },
        { key: 'as', value: 'Ka', text: 'Ka' },
    ];
    const toyotaOptions = [
        { key: 'af', value: 'Corolla', text: 'Corolla' },
        { key: 'ax', value: 'Rav4', text: 'Rav4' },
        { key: 'al', value: 'Etios', text: 'Etios' },
        { key: 'dz', value: 'Hilux', text: 'Hilux' },
        { key: 'as', value: 'Camry', text: 'Camry' },
    ];
    const renaultOptions = [
        { key: 'af', value: 'Stepway', text: 'Stepway' },
        { key: 'ax', value: 'Fluence', text: 'Fluence' },
        { key: 'al', value: 'Captur', text: 'Captur' },
        { key: 'dz', value: 'Sandero', text: 'Sandero' },
        { key: 'as', value: 'Logan', text: 'Logan' },
    ];

    const handleSelectMarca = (event, data) => {
        console.log(data.value);
        if (data.value == 'Toyota') {
            setOptions(toyotaOptions);
        } if (data.value == 'Ford') {
            setOptions(fordOptions);
        }
        //setValue(data.value);
    };
    const HandlesModel = (event, data) => {
        
        setDatos(data.value);
    };
    return (
        <>
            <Container>
                <Divider clearing />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='drivers license' circular />
                    <Header.Content>Turno de TestDrive</Header.Content>
                </Header>
                <Divider clearing />
                <Form>
                    <Form.Field>
                        <label>Marca del vehiculo</label>
                        <Dropdown
                            label="Seleccione una marca"
                            onChange={handleSelectMarca}
                            options={marcaOptions}
                        />
                    </Form.Field>
                    {options &&
                        <>
                            <Form.Field>
                                <label>Modelo del vehiculo</label>
                                <Dropdown
                                    label="Seleccione una modelo"
                                    onChange={HandlesModel}
                                    options={options}
                                />
                                {datos && 
                                <h1>{datos}</h1>
                                }
                            </Form.Field>



                        </>
                    }


                </Form>
                {/* <Button content='Registrar Interesado' onClick={marcaClicked} icon='right arrow' labelPosition='right' /> */}



            </Container>
        </>
    );
}

export default TestDrive;
