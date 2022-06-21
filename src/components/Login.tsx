import { useReducer, useEffect } from "react"

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login' , payload: LoginPayload}


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout': 
            return{
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }
        
        case 'login':   
            return{
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username,
            }

        default:
            return state;
    }
}




export const Login = () => {

    //extraigo validando del state
    const [ { validando, token, nombre } , dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(()=>{
            dispatch({type: 'logout'})
        },1500)
    }, [])

    const login = () => {        
        dispatch({type: 'login', payload: {nombre: 'Cesar', username: 'cpaliza'} })
    }
    
    const logout = () => {        
        dispatch({type: 'logout'})
    }



    if( validando ){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  Cargando...
                </div>
            </>
        )
    }


    return (
        <div>
            <h3>Login</h3>

            { (token) 
                ? <div className="alert alert-success"> Auntenticado como: {nombre} </div>
                : <div className="alert alert-danger"> No auntenticado </div>
            }

            {
                token
                ? <button className="btn btn-secondary" onClick={logout}>Logout</button>
                : <button className="btn btn-primary mr-2"  onClick={login}>Login</button>
            }
            
            

        </div>
    )
}
