import { gql } from '@apollo/client';

const getEmpresas = gql`
query Query {
  Empresas {
    _id
    nombre
    razon
    nit
    identificacion
    empleados
    estado
  }
}
`;

const getEmpresa = gql`
  query Empresa($_id: String!) {
    Empresa(_id: $_id) {
      _id
      nombre
      razon
      nit
      identificacion
      empleados
      estado
    }
  }
`;

export { getEmpresa, getEmpresas };