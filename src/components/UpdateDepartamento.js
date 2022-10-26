import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { event } from 'jquery';

export default class UpdateDepartamento extends Component {

    nombre = React.createRef();
    localidad = React.createRef();

    state = {
        departamento: {},
        status: false,
        modificar: false
    }

    modificarDepartamento = (e) => {
        e.preventDefault();

        var request = Global.urlDepartamentos + "api/Departamentos/";

        var departamento = {
            numero: parseInt(this.props.id),
            nombre: this.nombre.current.value,
            localidad: this.localidad.current.value
        }

        axios.put(request, departamento).then(response => {
            this.setState({ modificar: true })
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    prueba = (e) => {
        console.log(e.target.value)
    }

    cargarDepartamento = () => {
        var request = Global.urlDepartamentos + "api/Departamentos/" + this.props.id;

        axios.get(request).then(response => {
            this.setState({ departamento: response.data, status: true })
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    componentDidMount = () => {
        this.cargarDepartamento();
    }

    render() {

        if (this.state.modificar) {
            return <Navigate to="/" />
        }

        return (
            <div className='container'>
                <h1 className='my-5'>UpdateDepartamento <span style={{ color: "red" }}>{this.props.id}</span></h1>
                {
                    this.state.status &&
                    <form onSubmit={this.modificarDepartamento}>
                        <label className='form-label'>Id: </label>
                        <input type="text" className='form-control' defaultValue={this.state.departamento.numero} disabled />
                        <label className='form-label mt-3'>Nombre: </label>
                        <input type="text" className='form-control' ref={this.nombre} defaultValue={this.state.departamento.nombre} />
                        <label className='form-label mt-3'>Localidad: </label>
                        <input type="text" className='form-control' ref={this.localidad} defaultValue={this.state.departamento.localidad} />
                        <button className='btn btn-primary mt-3'>Modificar</button>
                    </form>
                }
                <button className='btn btn-secondary mt-3' value="Mi abuela" onClick={e => this.prueba(e)}>Prueba</button>
            </div>
        )
    }
}
