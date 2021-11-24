import React, {useEffect, useState} from 'react';
import { Message } from './Message';
import './useEffect.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
        name:'',
        email:'',
        }
    );


    //desestructurar
    const {name , email} = formState;

    useEffect( () => {
        //console.log('hola')
    })
    useEffect( () => {
        //console.log('hola')
    })
    useEffect( () => {
       // console.log('hola')
    })

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }
        

    /* const handleImputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    } */

    return (
        <>
            <h1>useEffect</h1>
            <hr/>  
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value = { name }
                    onChange = {handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value = { email }
                    onChange = {handleInputChange}
                />
            </div>

            { name === '123' && <Message/>}
        </>
    )
}
