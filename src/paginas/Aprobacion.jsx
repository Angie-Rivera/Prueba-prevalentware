import React, {useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { getEmpresa, getEmpresas } from '../graphql/queries'


const Aprobacion = () => {

const { data, error, loading } = useQuery(getEmpresas);

  useEffect(() => {
    console.log("data servidor", data)
  }, [data]);

  if (loading) return <div>Cargando....</div>;
    return (
        <div>
            usuarios 
        </div>
    )
}

export default Aprobacion
