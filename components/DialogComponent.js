import { Modal } from "./Modal";
import { AlertComponent } from "./AlertComponent";

export const DialogComponent = ({ dialog,  showModal, setShowModal }) => {
    return (
        <>
           
            {  
            <Modal showModal={showModal} setShowModal={setShowModal} >
               <AlertComponent title={dialog.title} message={dialog.message} AcceptHandler={dialog.AcceptHandler} cancelHandler={dialog.CancelHandler} />
           </Modal>
            } 

        </>
            
    )
}