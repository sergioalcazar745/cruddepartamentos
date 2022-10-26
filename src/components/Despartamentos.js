import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import loading from './../assests/images/loading.gif'
import { NavLink } from 'react-router-dom';

export default class Despartamentos extends Component {

    state = {
        departamentos: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = Global.urlDepartamentos + "api/Departamentos";

        axios.get(request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status == false) {
            return (
                <div className='container'>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <h1 className='my-5'>Departamentos</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Número</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Localidad</th>
                                <th scope="col">Detalle</th>
                                <th scope="col">Eliminar</th>
                                <th scope="col">Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((object, index) => {
                                    return (
                                    <tr key={index}>
                                        <th scope="row">{object.numero}</th>
                                        <td>{object.nombre}</td>
                                        <td>{object.localidad}</td>
                                        <td><NavLink to={"detalles-departamento/" + object.numero + "/" + object.nombre + "/" + object.localidad} className='btn btn-success'>Detalle</NavLink></td>
                                        <td><NavLink to={"delete-departamento/" + object.numero} className='btn btn-danger'>Eliminar</NavLink></td>
                                        <td><NavLink to={"update-departamento/" + object.numero} className='btn btn-warning'>Modificar</NavLink></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
