export const TiposBasicos = () => {

    let nombre: string = 'CPALIZA'
    const edad: number = 26
    const estaActivo: boolean = true
    const poderes = ['Velocidad', 'Fuerza', 'Saber lo que piensan las mujeres']

    return (
        <>
            
            <div>
                Usuario: { nombre } ({ edad }) {estaActivo ? '🟢 online ' : '⚪ offline'}
                <br/>
                Poderes: { poderes.join(', ') }
            </div>
        </>
    )

}
