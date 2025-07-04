import React, { useState } from 'react';
const TransactionForm = ({ onAddTransaction, categories }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(categories[0]);
    const [type, setType] = useState('expense');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || isNaN(amount)) return alert("Please enter a valid amount.");
        onAddTransaction({ amount: parseFloat(amount), category, type, description, date, id: Date.now() });
        setAmount(''); setDescription('');
    };
    return (
        <div className="transaction-form card">
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="expense">Expense</option><option value="income">Income</option>
                </select>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};
export default TransactionForm;