import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Trabajador from './Trabajador';
import { modificarStatus } from '../redux/slices';


const Gestion = () => {
  
  const dispatch = useDispatch();
  const statusE = useSelector(state => state.misDepartamentos.statusRequest);
  const listadoTrabajadores = useSelector(state => state.misTrabajadores.trabajadores);
  const actualizar = (statusE,index) => {
      dispatch (
        modificarStatus (
          {
            indice: index,
            nuevoStatus: statusE
          }
        )
      )
  }

  return (
    <>
      <h2>Gestion</h2>
      <br/>
      <hr/>
      <br/>
      <React.Fragment>
        <div className='Trabajador'>
          {listadoTrabajadores.map((valor, index) => (
            <Trabajador valor={valor} index={index} onActualizaStatus={actualizar} statusE={statusE}/>
          ))}
        </div>
      </React.Fragment>
    </>
  );

};

export default Gestion;