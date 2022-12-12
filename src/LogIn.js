import React from 'react';
import { useFormLogIn } from './hooks/useFormLogIn';
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';
import { useLocation } from 'react-router'
import { useEffect } from 'react';
import img from './img/Object1.png';

export const LogIn = () => {    
    
    const 
    {
    formState,
    setShowModal,
    isLoading,
    showModal,
    handleChange,
    handleLogIn,
    StateMessageError,
    setStateMessageError,
    setTitulo,
    titulo,
    username,
    password,
    } = useFormLogIn({
    username: '',
    password: ''
    });
    
    const openModal = (message,titulo) => {
        setStateMessageError(message);
        setTitulo(titulo);
        setShowModal(true);
      };
    

    function cancelHandler() {
        setShowModal(false);
    }

    const location = useLocation();
   
    var message = '';
    var title = '';

    if(location.state != null )
    {
        message = location?.state.message; 

        title = location?.state.title; 

    }

    useEffect (() => {
        if( message != null && message != '' )
        {
            openModal(message, title);
        }
    },[message]);

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <AlertComponent title={titulo} message={StateMessageError} type={2} cancelHandler={cancelHandler}  />
        </Modal> 
        
        <div className="App-body"> 
            <div className="w3-background-card flex center " style={{minHeight: '90vh'}}>
                <img className="w3-img" src={img} alt = "Logo" />
            
                    <div className= "FormContainer container-fluid ">   
                        <form onSubmit={handleLogIn} className = 'form' >
                            <div className= "content-main mb-6 ">
                                <div className= "main-row" >
                                    <div className= " col-xl-3 col-sm-6 col-12 flex center" style={{ flex:1 }}>
                                            <div className= "card w3-card border-0 flex" >
                                            
                                                <div className='card-body' >
                                                    <div className='flex mb-6'>
                                                        <div  className="input-tag no-select">
                                                            <label className='LabelForm'>Metodo de Autenticacion: Windows</label>
                                                        </div>
                                                    </div>
                                
                                                    <div className='mb-7 flex'>
                                                        <label className='input-group w3-input'>
                                                            <input type="text"  className="input-fancy" name="username" placeholder=" " value={username} onChange={handleChange} />
                                                            <p>Usuario</p>
                                                        </label>
                                                    </div>
                                                    <div className='mb-3 flex'>
                                                        <label className='input-group w3-input'>
                                                            <input type="password"  className="input-fancy" name="password" placeholder=" " value={password} onChange={handleChange} />
                                                            <p>Contraseña</p>
                                                        </label>
                                                    </div>

                                                    <div className='flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            <label className='LabelForm'>Utilizar credenciales actuales: </label>
                                                        </div>
                                                        <input type='checkbox'  name='chk' checked={false} disabled onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className='card-footer no-border'>
                                                    <div className= "center flex" >
                                                        <div className='card-body'>
                                                            <div className='start-section'>

                                                                    <button type='submit' className="w3-polimorfic3-btn" onClick={handleLogIn} {...(isLoading && { disabled: true })}> {isLoading ? 'Cargando...' : 'Iniciar Sesión'}</button>

                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>
                                    
                                </div>
                                {/*
                                <div className= "main-row" >
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{ flex:1 }}>
                                            <div className= "center flex" >

                                                <div className='card-body'>
                                                        <div className='start-section'>

                                                        <button type='submit' className="w3-polimorfic2-btn" onClick={handleLogIn}>Log In</button>

                                                        <button type='submit' className="w3-polimorfic3-btn" onClick={handleLogIn}>Sing Up</button>

                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                */}
                            </div>                        
                        </form>
                    </div>  
            </div>
        </div> 
    </>
    )
}
