import { useCounter } from '../hooks/useCounter';

export default function ContadorHook() {
    
    // Hook personbalizado que devuelve el valor actual del contador y 
    // una funcion para cambiarlo
    const {valor, acumular} = useCounter(10)


    return (
        <div>
            <h5>Contador Hook: <small>{valor}</small> </h5>
            <button className='btn btn-primary m-2' onClick={() => acumular(1)}> +1 </button>
            <button className='btn btn-secondary m-2' onClick={() => acumular(-1)}> -1 </button>
        </div>
    )
}
