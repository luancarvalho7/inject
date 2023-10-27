import React from 'react';
import './modal.css';

export function Modal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-button">X</button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
}
