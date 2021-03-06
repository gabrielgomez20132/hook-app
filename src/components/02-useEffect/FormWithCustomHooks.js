import React from 'react';
import { useForm } from '../../hooks/useForm';

import './useEffect.css';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm(
        {
        name:'',
        email:'',
        password:''
        }
    );


    //desestructuracion
    const {name , email , password} = formValues; 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value = { password }
                    onChange = {handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}
