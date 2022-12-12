import {  BsArchive, BsArchiveFill } from 'react-icons/bs';

export const SeleccionarArchivo = ({ value , name, label , onChange}) => {

    return (
        <>
        <div  className="input-tag no-select">
            {label}:
        </div>
        <label for={name} className="btn btn-neutral flex" {...value != '' && { style : { backgroundColor: "#f5f9fc" , fontWeight : "100", fontSize:"12px" } }}>
            {value != '' ?  value = value.replace(/C:\\fakepath\\/i, '')  : 'Seleccionar Archivo'}{value != '' ?  <BsArchiveFill style={{ marginLeft: "10px"}} /> : <BsArchive style={{ marginLeft: "10px"}} />}
        </label>
        <input id={name}  filename={value} name={name} type="file" onChange={onChange} />
        </>
    )
}