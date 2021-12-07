import React from 'react'
import Card from '../componentes/card'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <div>
           <ul className='flex'>
                <NavLink to='/formulario'>
                    <Card texto='solicitudes de creación de empresas' icono={<i class='fas fa-industry' />}/>
                </NavLink>
                <Card texto='Indicadores' icono={<i class='far fa-chart-bar'/>} /> 
            </ul> 
            <ul className='flex'>
                <Card texto='Inscripción de empleados en empresas' icono={<i class='fas fa-user-tie'/>} /> 
                <Card texto='Gestión de usuarios' icono={<i class='fas fa-users-cog'/>} /> 
            </ul>
        </div>
    )
}

export default Index
