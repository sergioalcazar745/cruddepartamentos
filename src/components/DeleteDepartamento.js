import React, { Component } from 'react';
import Global from './../Global';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default class DeleteDepartamento extends Component {

    state = {
        status: false
    }

    deleteDepartamento = (e) => {
        e.preventDefault();        
        var request = Global.urlDepartamentos + "api/Departamentos/" + this.props.id;
        
        axios.delete(request).then(response => {
            this.setState({
                status: true
            })
        }).catch(error => {
            console.log("Error: " + error)
        })
    }

    componentDidMount = () => {
        //this.deleteDepartamento();
    }

    render() {
        
        if(this.state.status){
            return (<Navigate to="/"/>)
        }

        return (
            <div className='container text-center'>
                <h1 className='my-3'>¿Delete Departamento <span style={{color: "red"}}>{this.props.id}</span>?</h1>
                <form onSubmit={this.deleteDepartamento}>
                    <button className='btn btn-danger'>Eliminar departamento</button>
                </form>
            </div>
        )
    }
}
