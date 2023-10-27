import React from 'react';
import './modal.css';

import diamond from '../../images/diamond.png'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <img src={diamond} alt="Acesso VIP" />
                    <h1><strong>Acesso VIP</strong></h1>
                    <button onClick={onClose} className="close-button">X</button>
                </div>
                <div className="modal-body">
                    <p>Monitore todas as casas, tenha acesso ao sistema de todos os fornecedores e veja os melhores jogos.</p>
                </div>
                <div className="modal-footer">
                    <button className="vip-button"><strong>QUERO SER VIP</strong></button>
                    <button className="close-button" onClick={onClose}>Não, obrigado</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
