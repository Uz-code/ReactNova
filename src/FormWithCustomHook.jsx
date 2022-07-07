import { useEffect } from 'react';
import { useForm } from './hooks/useForm';
import React from 'react';

export const FormWithCustomHook = () => {

    const 
        {
        formState,
        handleChange,
        handleSubmit,
        handleClear,
        StateMessageError,
        username,
        email,
        password
        } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
        <div className="App-header">
            <form onSubmit={handleSubmit} className = 'FormContainer centerDiv' >
                
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleChange} />
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={handleChange} />
                <label>Password:</label>
                <input type="text" name="password" value={password} onChange={handleChange} />
                <h1 className='MessageError' >{StateMessageError}</h1> 

                <input className= 'FormButton' type="submit" value="Enviar" />
                <input  className= 'FormButton' type="button" value="Limpiar" onClick={handleClear} />
            </form>
        </div>
        </>
    );
}
