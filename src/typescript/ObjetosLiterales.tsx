/*
!type: 
class: crear instancias y si tiene representacion en JS 
interface: para definir la estructura de los objetos 
*/

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais: String;
    cp: number;
}

export default function ObjetosLiterales() {

    const persona: Persona = {
        nombreCompleto: 'Cesar',
        edad: 30,
        direccion: {
            pais: 'Argentina',
            cp: 4000,
        }
    }

    return (
        <>
            <h5>Objetos Literales</h5>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2)}
                </pre>
            </code>   
        </>
    )
}
