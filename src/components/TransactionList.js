import React from 'react';
const TransactionList = ({ transactions, onDelete, onEdit }) => (
    <div className="transaction-list card">
        <h3>History</h3>
        <ul>
            {transactions.slice().sort((a,b) => new Date(b.date) - new Date(a.date)).map((t) => (
                <li key={t.id} className={t.type}>
                    <span><strong>{t.description}</strong><small>{new Date(t.date).toLocaleDateString()} - {t.category}</small></span>
                    <span className="action-buttons">
                        <strong className={`amount ${t.type}`}>৳ {t.amount.toFixed(2)}</strong>
                        <button onClick={() => onEdit(t)} className="edit-btn">Edit</button>
                        <button onClick={() => onDelete(t.id)} className="delete-btn">x</button>
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
export default TransactionList;