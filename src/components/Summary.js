import React from 'react';
const Summary = ({ transactions }) => {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = income - expense;
    return (
        <div className="summary card">
            <div className="summary-item"><h4 className="income">Total Income</h4><p className="income">৳ {income.toFixed(2)}</p></div>
            <div className="summary-item"><h4 className="expense">Total Expense</h4><p className="expense">৳ {expense.toFixed(2)}</p></div>
            <div className="summary-item"><h4 className="balance">Balance</h4><p className="balance">৳ {balance.toFixed(2)}</p></div>
        </div>
    );
};
export default Summary;