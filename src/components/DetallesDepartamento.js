import React, { Component } from 'react'

export default class DetallesDepartamento extends Component {
    render() {
        return (
            <div className='container'>
                <h1 color={{color: "green"}}>Detalles departamento {this.props.numero}</h1>
                <h3 color={{color: "blue"}}>Nombre: {this.props.nombre}</h3>
                <h3 color={{color: "fushsia"}}>Localidad: {this.props.localidad}</h3>
            </div>
        )
    }
}
