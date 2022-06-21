import { useForm } from '../hooks/useForm';


export const Formularios = () => {

    const { formulario, email, password,  onChange} = useForm({
        email: 'test@gmail.com',
        password: '1234'
    })

    return (
        <>
          <h3>Formularios</h3>

            <input 
                type="text"
                className="form-control mb-2"
                placeholder="Email"
                value={formulario.email}
                onChange={(e) => onChange( e.target.value , 'email')}
                />
            <input 
                type="password"
                className="form-control"
                placeholder="Password"
                value={formulario.password}
                onChange={(e) => onChange( e.target.value , 'password')}
            />            
            <hr />

            <code>
                <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
            </code>


        </>
    )
}
