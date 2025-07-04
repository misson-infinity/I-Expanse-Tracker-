import React from 'react';
import Summary from '../components/Summary';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import CategoryChart from '../components/CategoryChart';
import ExportToPDF from '../components/ExportToPDF';
const Dashboard = ({ transactions, addTransaction, onDelete, onEdit, categories }) => {
    const userName = "Md Habibur Rahman Mahi";
    const userTitle = "founder and CEO of infinity group";
    return (
        <>
            <div className="dashboard-header card">
                <h2>Welcome to I Expense Tracker</h2>
                <p>Developed by: <strong>{userName}</strong> | Title: <strong>{userTitle}</strong></p>
                <ExportToPDF transactions={transactions} userName={userName} userTitle={userTitle} />
            </div>
            <Summary transactions={transactions} />
            <CategoryChart transactions={transactions} />
            <TransactionForm onAddTransaction={addTransaction} categories={categories} />
            <TransactionList transactions={transactions} onDelete={onDelete} onEdit={onEdit} />
        </>
    );
};
export default Dashboard;