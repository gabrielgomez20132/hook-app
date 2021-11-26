import React, {useEffect, useState} from 'react';

import './useEffect.css';

export const FormWithCustomHooks = () => {

    const [formState, setFormState] = useState(
        {
        name:'',
        email:'',
        }
    );


    //desestructurar
    const {name , email} = formState;

    

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }
        

   

    return (
        <>
            <h1>FormWithCustomHooks</h1>
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

            
        </>
    )
}
