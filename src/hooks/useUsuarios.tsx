import { useEffect, useState, useRef } from 'react';
import { reqResApi } from "../api/redRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)
    
    useEffect(() => {   
        cargarUsuarios()     
    }, [])

    const cargarUsuarios = async() => {
        
        const res = await reqResApi.get<ReqResListado>('/users', {
            params:{
                page: paginaRef.current
            }
        })

        if( res.data.data.length > 0){
            setUsuarios(res.data.data)
        }else{
            alert('No hay más registros')
        }
    }


    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior =  () => {
        if( paginaRef.current > 1){
            paginaRef.current --
            cargarUsuarios()
        }else{
            alert('No hay más registros')
        }
    }


    return({
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    })

}
