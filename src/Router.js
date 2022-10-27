import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CreateDepartamento from './components/CreateDepartamento';
import Despartamentos from './components/Despartamentos';
import MenuDepartamento from './components/MenuDepartamento';
import DetallesDepartamento from './components/DetallesDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';
import DetallesEmpleadosDepartamento from './components/DetallesEmpleadosDepartamento';
import DetallesEmpleado from './components/DetallesEmpleado';

export default class Router extends Component {
    render() {

        function GetParamsDetallesDepartamento() {
            const {numero, nombre, localidad} = useParams();
            console.log(numero)
            return (<DetallesDepartamento numero={numero} nombre={nombre} localidad={localidad}/>)
        }

        function GetParamsDeleteDepartamento() {
            const { numero } = useParams();
            return (<DeleteDepartamento id={numero}/>)
        }

        function GetParamsUpdateDepartamento() {
            const { numero } = useParams();
            return (<UpdateDepartamento id={numero}/>)
        }

        function GetParamsEmpleadosDepartamento() {
            const { numero } = useParams();
            return (<DetallesEmpleadosDepartamento id={numero}/>)
        }

        function GetParamsEmpleado() {
            const { numero } = useParams();
            return (<DetallesEmpleado id={numero}/>)
        }

        return (
            <BrowserRouter>
            <MenuDepartamento/>
                <Routes>
                    <Route path='/' element={<Despartamentos/>}/>
                    <Route path='/create-departamento' element={<CreateDepartamento/>}/>
                    <Route path='/detalles-departamento/:numero/:nombre/:localidad' element={<GetParamsDetallesDepartamento/>}/>
                    <Route path='/delete-departamento/:numero' element={<GetParamsDeleteDepartamento/>}/>
                    <Route path='/update-departamento/:numero' element={<GetParamsUpdateDepartamento/>}/>
                    <Route path='/detalles-empleados-departamento/:numero' element={<GetParamsEmpleadosDepartamento/>}/>
                    <Route path='/detalle-empleado/:numero' element={<GetParamsEmpleado/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
