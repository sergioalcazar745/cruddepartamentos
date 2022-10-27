import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class MenuDepartamento extends Component {

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
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/create-departamento" className="nav-link">Create</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departamentos
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.status &&
                                        this.state.departamentos.map((departamento, index) => {
                                            return <li key={index}><NavLink to={"detalles-empleados-departamento/" + departamento.numero} className='dropdown-item'>{departamento.nombre}</NavLink></li>
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
