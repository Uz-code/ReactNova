import React , { useState } from 'react';
import { useForm } from './hooks/useForm';
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';

// import react use form from react-hook-form
//import { useForm as useFormReactHookForm } from 'react-hook-form';

export const LogIn = () => {    

    const 
    {
    formState,
    setShowModal,
    showModal,
    handleChange,
    handleLogIn,
    StateMessageError,
    username,
    password,
    } = useForm({
    username: '',
    password: ''
    });
    
    const openModal = () => {
        setShowModal(prev => !prev);
      };
    
    function AcceptHandler() {
        setShowModal(false);
    }

    function cancelHandler() {
        setShowModal(false);
    }

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <AlertComponent titulo="Error" subtitulo={StateMessageError} type={2} cancelHandler={cancelHandler} AcceptHandler={AcceptHandler}  />
        </Modal> 
        
        <div className="App-body">
            <div className= "responsive-wrapper FormContainer container-fluid ">
                <div className= "main-header">
                    <h1> Log In </h1>
                </div>
                
                <form onSubmit={handleLogIn} className = 'form' >
                    <div className= "content-main mb-6 ">
                        <div className= "main-row" >
                            <div className= "col-xl-3 col-sm-6 col-12 flex" style={{ flex:1 }}>
                                <div className= "card shadow border-0 flex" >

                                    <div className='card-body'>
                                        <div className='input-group mb-3 '>
                                            <div  className="input-tag no-select">
                                                <label className='LabelForm'>Metodo de Autenticacion: Windows</label>
                                            </div>
                                        </div>
                                        <div className='input-group-flex mb-3'>
                                            <div  className="input-tag no-select">
                                                Usuario
                                            </div>
                                            <input type="text" className="form-input" name="username" value={username} onChange={handleChange} />
                                        </div>
                                        <div className='input-group-flex mb-3'>
                                            <div  className="input-tag no-select">
                                                <label className='LabelForm'>Contraseña</label>
                                            </div>
                                            <input type='password' className='form-input' name='password' value={password} onChange={handleChange} />
                                        </div>
                                        <div className='flex mb-3'>
                                            <div  className="input-tag no-select">
                                                <label className='LabelForm'>Utilizar credenciales actuales: </label>
                                            </div>
                                            <input type='checkbox'  name='chk' checked={false} disabled onChange={handleChange} />
                                        </div>
                                    </div>
                                    
                                    <div className='card-footer'>
                                        <div className=' '>
                                            <div className= "" >
                                                <div className='input-group-flex mb-3 '>
                                                <button type='submit' className="btn btn-sm btn-neutral flex" onClick={handleLogIn}>Ingresar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>                        
                </form>
            </div>
        </div> 
    </>
    )
}
