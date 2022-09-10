import Gasto from './Gasto'

const ListadoGastos = ({
  gastos, 
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className='Listado-gastos contenedor'>
     
      {
        filtro ? (
          <>
             <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
             {gastosFiltrados.map( (gasto, index) => (
                <Gasto
                    key={index}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                />
              ))}
          </>
          
        ) : (
          <>
           <h2>{gastos.length ? 'Gastos' : 'No Hay gastos'}</h2>
              {gastos.map( (gasto, index) => (
                 <Gasto
                        key={index}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                     />
                ))}
             </>
           )
        }
    </div>
  )
}

export default ListadoGastos
