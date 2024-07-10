import React from "react";

function Modal({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center bg-green-900 max-w-96 max-h-40 w-full h-full z-30 fixed">
      <div className="flex w-full items-start justify-start p-5">
        <h5 className="flex-1 text-center">This a popup</h5>
        <span className="cursor-pointer text-2xl" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="w-full text-center">Body</div>
    </div>
  );
}

export default Modal;
