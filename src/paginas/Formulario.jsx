import React from 'react'

const Formulario = () => {
    return (
        <div>
            <form className='flex flex-col'>
                <label>
                    Nombre
                    <input 
                    name='nombre' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    required/>
                </label>
                <label>
                    Razón social
                    <input 
                    name='razon-social' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    required/>
                </label>
                <label>
                    NIT
                    <input 
                    name='nit' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    required/>
                </label>
                <label>
                    Identificación
                    <input 
                    name='identificacion' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    required/>
                </label>
                <label>
                    #de Empleados
                    <input 
                    name='empleados' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='number'
                    required/>
                </label>
                <label>
                    Logo
                    <input 
                    name='logo' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    required/>
                </label>
            </form>
        </div>
    )
}

export default Formulario
