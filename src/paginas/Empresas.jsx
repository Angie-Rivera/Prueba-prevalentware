import React from 'react'

const Empresas = () => { 
    return (
        <div>
            <div className='flex flex-col w-full justify-center items-center'>
            <form 
            className='flex flex-col flex-wrap p-6 mt-8 max-w-md border-2 rounded-md'
            onSubmit='{handleSubmit(onSubmit)}'>
                <label>
                    Nombre
                    <input 
                    name='nombre' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg mx-10'
                    type='text'
                    required/>
                </label>
                <label>
                    Razón social
                    <input 
                    name='razon' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg mx-3 my-2'
                    type='text'
                    required/>
                </label>
                <label>
                    NIT
                    <input 
                    name='nit' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg mx-16'
                    type='text'
                    required/>
                </label>
                <label>
                    Identificación
                    <input 
                    name='identificacion' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg my-2 mx-2'
                    type='text'
                    required/>
                </label>
                <label>
                    #de Empleados
                    <input 
                    name='empleados' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg mx-2'
                    type='number'
                    required/>
                </label>
                <label>
                    Logo
                    <input 
                    name='logo' 
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg mx-16 my-2'
                    type='text'
                    required/>
                </label>
                <button type='submit'
          className='bg-indigo-400 p-1 rounded-md shadow-md hover:bg-indigo-600 text-white mx-10 my-4'
          onClick=''>
              Registrar empresa</button>
            </form>
            </div>
        </div>
    )
}
export default Empresas;
