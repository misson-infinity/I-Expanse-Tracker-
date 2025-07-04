import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import DeveloperPage from './pages/DeveloperPage';
import Settings from './components/Settings';
import Footer from './components/Footer';
import EditTransactionModal from './components/EditTransactionModal';
import ConfirmationModal from './components/ConfirmationModal';
import './styles/App.css';
import './styles/DarkMode.css';

function App() {
    const [transactions, setTransactions] = useLocalStorage('transactions', []);
    const [categories] = useLocalStorage('categories', ['Food', 'Transport', 'Salary', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Gift']);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const [editingTransaction, setEditingTransaction] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [showClearConfirm, setShowClearConfirm] = useState(false);

    useEffect(() => { document.body.classList.toggle('dark-mode', isDarkMode); }, [isDarkMode]);

    const addTransaction = (t) => setTransactions([...transactions, t]);
    const updateTransaction = (id, updated) => { setTransactions(transactions.map(t => (t.id === id ? updated : t))); setEditingTransaction(null); };
    const handleDelete = (id) => { setTransactions(transactions.filter(t => t.id !== id)); setDeletingId(null); };
    const handleClearData = () => { setTransactions([]); setShowClearConfirm(false); };
    const handleSetPage = (page) => { setCurrentPage(page); setSidebarOpen(false); };

    return (
        <div className="app-container">
            <Header onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <Sidebar isOpen={isSidebarOpen} onSetPage={handleSetPage} />
            <main>
                {currentPage === 'dashboard' && <Dashboard transactions={transactions} addTransaction={addTransaction} onDelete={setDeletingId} onEdit={setEditingTransaction} categories={categories} />}
                {currentPage === 'settings' && <Settings isDarkMode={isDarkMode} onToggleDarkMode={() => setDarkMode(!isDarkMode)} onClearData={() => setShowClearConfirm(true)} />}
                {currentPage === 'developer' && <DeveloperPage />}
            </main>
            <Footer />
            {editingTransaction && <EditTransactionModal transaction={editingTransaction} onUpdate={updateTransaction} onCancel={() => setEditingTransaction(null)} categories={categories} />}
            {deletingId && <ConfirmationModal message="Are you sure you want to delete this transaction?" onConfirm={() => handleDelete(deletingId)} onCancel={() => setDeletingId(null)} />}
            {showClearConfirm && <ConfirmationModal message="This will delete ALL data. This action cannot be undone. Are you sure?" onConfirm={handleClearData} onCancel={() => setShowClearConfirm(false)} />}
        </div>
    );
}
export default App;