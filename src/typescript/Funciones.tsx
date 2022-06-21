export const Funciones = () => {

    const sumar = ( a: number, b: number  ): number => {
        return a + b
    }


    return (
        <div>
            <h4>Funciones</h4>
            El resultado de sumar es: { sumar(2, 4) }
        </div>
    )
}
