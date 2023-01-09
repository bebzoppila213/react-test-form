import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn-open-modal">Открыть модалку</button>
      <Modal closeModal={closeModal} modalIsOpen={modalIsOpen}></Modal>
    </div>
  );
}

export default App;
