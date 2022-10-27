import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesEmpleadosDepartamento extends Component {

    state = {
        empleados: [],
        status: false
    }

    loadEmpleadosDepartmento = () => {
        var request = Global.urlEmpleados + "api/Empleados/EmpleadosDepartamento/" + this.props.id;

        axios.get(request).then(response => {
            this.setState({
                empleados: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleadosDepartmento();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id){
            this.loadEmpleadosDepartmento();
        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='my-5'>Empleados del departamento {this.props.id}</h1>
                {
                    this.state.status &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Apellido</th>
                                <th scope="col">Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.empleados.map((empleado, index) => {
                                    return (
                                    <tr key={index}>
                                        <td>{empleado.apellido}</td>
                                        <td><NavLink to={"/detalle-empleado/" + empleado.idEmpleado} className="btn btn-primary">Detalle</NavLink></td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}
