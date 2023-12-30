const Candidato = ({ index, valor, onBuscarUno, onGuardarUno }) => {

    return (
        <>
          <div>
            <figure>
                <img src={valor.picture.large} alt={`${valor.name.title} - ${valor.name.first}`} />
            </figure>
            {valor.name.title} - {valor.name.first}
            <br/><br/>
            <button onClick={() => onBuscarUno(index)}>Descartar</button> <button onClick={() => onGuardarUno(valor,index)}>Guardar</button>
            <br/><br/>
          </div>
        </>
      );

};

export default Candidato;