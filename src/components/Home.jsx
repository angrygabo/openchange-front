import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarNombre, modificarUnValor } from '../redux/slices';

const HomePage = () => {
  const  dispatch = useDispatch();
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  const miArrayAhora = useSelector(state => state.unValor.bibliotecas)
  const miEdadAhora = useSelector(state => state.otroValor.miEdad)
  const modificar = () => {
    dispatch(guardarNombre('Pequeño BOB'))
  }
  const modificarArray = () => {
    dispatch(
      modificarUnValor({
        indice: 0,
        nuevoNombre: 'Super React',
        nuevoComienzo: '2016'
      })
    )
  }
  return (
      <div>
        <h2>HOLA: {miNombreAhora} - {miEdadAhora}</h2>
        <button onClick={modificar}>Modificar nombre</button>
        <button onClick={modificarArray}>Modificar array</button>
        {miArrayAhora.map((valor, index) => (
          <React.Fragment key={index}>
            <div>
              {valor.nombre} - {valor.comienzo}
            </div>
          </React.Fragment>
        ))}
      </div>
  );
};

export default HomePage;