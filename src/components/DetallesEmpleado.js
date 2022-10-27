import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class DetallesEmpleado extends Component {

    state = {
        empleado: {},
        status: false
    }

    loadEmpleado = () => {
        var request = Global.urlEmpleados + "api/Empleados/" + this.props.id;
        
        axios.get(request).then(response => {
            this.setState({
                empleado: response.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.loadEmpleado();
    }

    render() {
        return (
            <div className='container'>
                <h1 className='my-5'>Detalle de {this.props.id}</h1>
                <form>
                    <div className='mt-3'>
                        <label className='form-label'>Apellido</label>
                        <input type="text" className='form-control' defaultValue={this.state.empleado.apellido} disabled/>
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Oficio</label>
                        <input type="text" className='form-control' defaultValue={this.state.empleado.oficio} disabled/>
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Salario</label>
                        <input type="text" className='form-control' defaultValue={this.state.empleado.salario} disabled/>
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Departamento</label>
                        <input type="text" className='form-control' defaultValue={this.state.empleado.departamento} disabled/>
                    </div>
                </form>
                <div className='mt-3'>
                    <NavLink to="/" className="btn btn-secondary">Volver</NavLink>
                </div>
            </div>
        )
    }
}
