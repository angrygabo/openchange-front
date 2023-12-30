const Trabajador = ({ index, valor, onActualizaStatus, statusE }) => {
    
    return (
        <>
            <div key={`${index}`}>
                <figure>
                <img src={valor.picture.large} alt={`${valor.name.title} - ${valor.name.first}`} />
                </figure>
                {valor.name.title} - {valor.name.first}
                <br/>
                {valor.estado}<br/>
                <select onChange={(event) => onActualizaStatus(event.target.value,index)}>
                    <option>Seleccione</option>
                    {statusE.map((actual,i) =>
                     valor.estado === actual 
                     ? <option selected key={i}>{actual}</option>
                     : <option key={i}>{actual}</option>
                    )}
                </select>
            </div>
        </>
      );

};

export default Trabajador;