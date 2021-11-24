import React , {useEffect} from 'react'

export const Message = () => {
    
    useEffect(() => {
        console.log('componente MONTADO');
        return () => {
            console.log('componente DESMONTADO');
        }
    }, [])



    return (
        <div>
                <h3>Componente Mensaje !!!</h3>
        </div>
    )
}
