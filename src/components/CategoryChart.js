import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const CategoryChart = ({ transactions }) => {
    const expenseData = transactions.filter(t => t.type === 'expense').reduce((acc, t) => {
        const existing = acc.find(item => item.name === t.category);
        if (existing) { existing.value += t.amount; } else { acc.push({ name: t.category, value: t.amount }); }
        return acc;
    }, []);
    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
    if (expenseData.length === 0) return <div className="card"><h3>No expense data to display chart.</h3></div>;
    return (
        <div className="card" style={{ height: '400px' }}>
            <h3>Expense by Category</h3>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={expenseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                        {expenseData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie><Tooltip /><Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
export default CategoryChart;