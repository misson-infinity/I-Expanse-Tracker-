import React, { useState } from 'react';
const EditTransactionModal = ({ transaction, onUpdate, onCancel, categories }) => {
    const [formState, setFormState] = useState(transaction);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: name === 'amount' ? parseFloat(value) : value });
    };
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Edit Transaction</h2>
                <form onSubmit={(e) => { e.preventDefault(); onUpdate(transaction.id, formState); }}>
                    <input name="amount" type="number" value={formState.amount} onChange={handleChange} />
                    <input name="description" type="text" value={formState.description} onChange={handleChange} />
                    <input name="date" type="date" value={formState.date} onChange={handleChange} />
                    <select name="category" value={formState.category} onChange={handleChange}>
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <button type="submit" style={{ marginRight: '1rem' }}>Update</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
};
export default EditTransactionModal;