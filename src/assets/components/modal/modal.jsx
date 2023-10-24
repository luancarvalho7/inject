import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
