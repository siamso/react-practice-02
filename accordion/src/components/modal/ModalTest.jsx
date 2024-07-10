import React, { useState } from "react";
import Modal from "./Modal";

function ModalTest() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button onClick={handleOpenModal}>Open Modal</button>
      {openModal ? <Modal onClose={closeModal} /> : null}
    </div>
  );
}

export default ModalTest;
