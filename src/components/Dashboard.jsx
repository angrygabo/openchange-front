import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarTrabajador } from '../redux/slices';
import { Link } from 'react-router-dom';
import Candidato from './Candidato';

const Dashboard = () => {

  const dispatch = useDispatch();

  const [candidatos, setCandidatos] = useState([])
  useEffect(() => {
      fetch("https://randomuser.me/api/?results=6")
      .then((Response) => Response.json())
      .then((datos) => setCandidatos(datos.results))
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  },[])

  const descartar = (indice) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((datos) => {
        const nuevosCandidatos = [...candidatos];
        nuevosCandidatos[indice] = { ...datos.results[0] };
        setCandidatos(nuevosCandidatos)
      })
      .catch((error) => {
        console.error("Error al descartar:", error);
      });
  };

  const listadoTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)

  const guardarCandidato = (valor,indice) => {
    descartar(indice)
    dispatch(guardarTrabajador(valor))
  }

  return (
    <>
      <h2>Dashboard</h2>
      {candidatos.map((valor, index) => 
        <Candidato valor={valor} index={index} onBuscarUno={descartar} onGuardarUno={guardarCandidato} />
      )}
      <React.Fragment>
        <hr/><br/><br/>
        <div className='candidatos'>
          {listadoTrabajadores.map((valor, index) => (
            <Link key={index} to="/gestion">
              <button>{valor.name.first}</button>
            </Link>
          ))}
        </div>
      </React.Fragment>
    </>
  );

};

export default Dashboard;