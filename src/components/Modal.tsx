
import { useEffect } from "react"
import useBackClick from "../hooks/useBackClick"
import CustomForm from "./CustomForm"

type ModalProps = {
    modalIsOpen: boolean,
    closeModal: () => void
}

export default function Modal({ modalIsOpen, closeModal }: ModalProps){
    const [_, updateElementIsOpen] = useBackClick(".modal-wrapper", () => closeModal())

    useEffect(() => {
        updateElementIsOpen(modalIsOpen);
        
    },[modalIsOpen])

    return(
        <div className={"modal " + (modalIsOpen ? " modal--open" : " ")}>
            <div className="modal__inner">
            <div className="modal-wrapper">
                <button onClick={() => closeModal()} className="modal-close">X</button>
                <CustomForm></CustomForm>
                </div>
            </div>
        </div>
    )
}