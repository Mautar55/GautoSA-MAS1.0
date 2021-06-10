import React, { useState, useEffect } from "react";
import { Container, Button, Label, Input, Form, Header, Icon, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
//import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import Date from '../components/dateTime'

function TestDrive() {

    const [value, setValue] = useState('');
    const [options, setOptions] = useState('');
    const [cantidad, setCantidad] = useState('');

    let cantidades = 1;

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
        { key: 'af', value: 'Ecosport', text: 'Ecosport', cantidad: cantidades },
        { key: 'ax', value: 'Escord', text: 'Escord', cantidad: cantidades },
        { key: 'al', value: 'Fiesta', text: 'Fiesta',cantidad: cantidades },
        { key: 'dz', value: 'Falcon', text: 'Falcon',cantidad: cantidades },
        { key: 'as', value: 'Ka', text: 'Ka',cantidad: cantidades },
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
        console.log(data);
        
        if (data.value == 'Toyota') {
            setOptions(toyotaOptions);
        } if (data.value == 'Ford') {
            setOptions(fordOptions);
        }
        //setValue(data.value);
    };



    
    return (
        <>
            <Container>
                <Divider clearing />
                <Header as='h2' icon textAlign='center'>
                    <Icon name='drivers license' circular />
                    <Header.Content>Actualizar Stock</Header.Content>
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
                                    onChange={handleSelectMarca}
                                    options={options}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Cantidad disponible</label>
                                <Label as='a'>11 unidades</Label>
                            </Form.Field>

                        </>
                    }
                    <Date></Date>

                    <Divider clearing />

                    <Button fluid positive type='submit'>Solicitar Turno</Button>
                    <Divider clearing />

                   

                </Form>
                {/* <Button content='Registrar Interesado' onClick={marcaClicked} icon='right arrow' labelPosition='right' /> */}



            </Container>
        </>
    );
}

export default TestDrive;
