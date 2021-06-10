import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
        <Link to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/turn">
          <Menu.Item
            name='Turnos'
            active={activeItem === 'Turnos'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/mediodepago">
          <Menu.Item
            name='Medio de Pagos'
            active={activeItem === 'Medio de Pagos'}
            onClick={this.handleItemClick}
          /></Link>
           <Link to="/actualizarStocks">
           <Menu.Item
            name='actualizarStocks'
            active={activeItem === 'Stock Vehiculos'}
            onClick={this.handleItemClick}
          /></Link>
        </Menu>
      </Segment>
    )
  }
}