import React from 'react';
const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
    <div className="modal-backdrop">
        <div className="modal-content">
            <p>{message}</p>
            <button onClick={onConfirm} style={{ marginRight: '1rem', background: '#dc3545' }}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </div>
);
export default ConfirmationModal;