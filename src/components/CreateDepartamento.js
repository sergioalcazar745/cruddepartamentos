import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    numero = React.createRef();
    nombre = React.createRef();
    localidad = React.createRef();

    state = {
        status: false
    }

    enviarDepartamento = (e) => {
        e.preventDefault();
        var request = Global.urlDepartamentos + "api/Departamentos";

        var departamento = {
            numero: parseInt(this.numero.current.value),
            nombre: this.nombre.current.value,
            localidad: this.localidad.current.value
        }

        axios.post(request, departamento).then(response => {
            console.log(response)
            this.setState({status: true})
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    render() {

        if(this.state.status){
            return (<Navigate to="/"/>)
        }

        return (
            <div className='container'>
                <h1 className='my-5'>CreateDepartamento</h1>
                {
                    this.state.status &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Enhorabuena!</strong> Has introducido el departamento correctamente
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <form onSubmit={this.enviarDepartamento}>
                    <div className="mb-3">
                        <label className="form-label">Número</label>
                        <input type="text" className="form-control" id="numero" ref={this.numero}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" ref={this.nombre}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Localidad</label>
                        <input type="text" className="form-control" id="localidad" ref={this.localidad}/>
                    </div>
                    <button className="btn btn-primary">Crear</button>
                </form>
            </div>
        )
    }
}
