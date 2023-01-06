import { Modal } from "./Modal";
import { AlertComponent } from "./AlertComponent";

export const DialogComponent = ({ dialog,  showModal, setShowModal, children }) => {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal} CancelHandler={dialog.CancelHandler}>
            <AlertComponent title={dialog.title} message={dialog.message} AcceptHandler={dialog.AcceptHandler} cancelHandler={dialog.CancelHandler} customButtonText={dialog.customButtonText}>
                {children}
            </AlertComponent>
        </Modal>
    )
}