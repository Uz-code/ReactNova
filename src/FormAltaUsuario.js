
export const FormAltaUsuario = ({ cancelHandler, AcceptHandler}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        //todo implementar el handler
        console.log('SubmitForm');
        AcceptHandler();
    }


    return (
        <div className="container-np">
            <div className="card-header">
                <h1>Creacion de Usuario Controlado</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Usuario</label>
                        <input type="text" className="input-large" placeholder="" ></input>                            
                        <small id="emailHelp" className="form-text text-muted"> Lorem ipsum dolor sit amet, consectetur. </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input type="text" className="input-large" placeholder="" ></input>                            
                        <small id="emailHelp" className="form-text text-muted">Lorem ipsum dolor sit amet, consectetur. </small>
                    </div>
                    <div className="center container-np ">

                        <button className="BtnPrincipal" onClick={() => cancelHandler()} >Cancelar</button>

                        <button className="BtnPrincipal" type="submit" >Aceptar</button>

                    </div>
                </form>
            </div>
        </div>
    );
    }

