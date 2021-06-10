import React from 'react'
import { Divider, Image, Button, Container, Icon, Header, List } from 'semantic-ui-react'


const ImageExampleVerticallyAligned = () => (
    <div>

        <Header as='h2' icon textAlign='center'>
            <Icon name='payment' circular />
            <Header.Content>Métodos de pago</Header.Content>
        </Header>

        <List animated verticalAlign='middle'>

            <List.Item>
                <List.Content>
                    <a>
                        <Header as='h2' icon textAlign='left'>
                            <Image src='/images/efectivo.png' size='massive'  rounded/> <span>Efectivo</span>
                        </Header>
                    </a>
                </List.Content>
            </List.Item>

            <Divider />

            <List.Item>
                <List.Content>
                    <a>
                        <Header as='h2' icon textAlign='left'>
                            <Image src='/images/Tarjeta.png' size='massive' rounded/>{' '} <span>Tarjeta</span>
                        </Header>
                    </a>
                </List.Content>
            </List.Item>

            <Divider />

            <List.Item>
                <List.Content>
                    <a>
                        <Header as='h2' icon textAlign='left'>
                            <Image src='/images/cheque.png' size='massive' rounded/>{' '}<span>Cheque</span>
                        </Header>
                    </a>
                </List.Content>
            </List.Item>
        </List>


        <Container align="center">
            <Button.Group>
                <Button negative>Cancelar</Button>
                <Button.Or />
                <Button positive>Derivar</Button>
            </Button.Group>
        </Container>
    </div>
)

export default ImageExampleVerticallyAligned