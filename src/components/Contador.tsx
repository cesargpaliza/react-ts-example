import { useState } from "react"

export default function Contador() {
    
    const [valor, setValor] = useState<number>(0)
    
    const acumular = (numero: number) => {
        setValor(valor + numero)
    }

    return (
        <div>
            <h5>Contador: <small>{valor}</small> </h5>
            <button className='btn btn-primary m-2' onClick={() => acumular(1)}> +1 </button>
            <button className='btn btn-secondary m-2' onClick={() => acumular(-1)}> -1 </button>
        </div>
    )
}
