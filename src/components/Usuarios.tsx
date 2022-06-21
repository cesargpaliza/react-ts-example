
import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()
   

    const renderItem = ( {id, first_name, last_name, email, avatar} : Usuario) => {

        return(
            <>
                <tr key={id.toString()}>
                    <td>
                        <img 
                            src={avatar} 
                            alt={ first_name } 
                            style={{ width: 30, borderRadius: 10 }}
                        /> 
                    </td>
                    <td>{ first_name } { last_name }</td>
                    <td>{ email }</td>
                </tr>
            </>
        )
    }


    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button
                className='btn btn-outline-primary mr-2'
                onClick={ paginaAnterior }
            >
                Anterior
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={ paginaSiguiente }
            >
                Siguiente
            </button>
        </>
    )
}
