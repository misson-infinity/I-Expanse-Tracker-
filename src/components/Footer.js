import React from 'react';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>© {year} I Expense Tracker | Developed by Md Habibur Rahman Mahi, founder and CEO of infinity group ♾️</p>
        </footer>
    );
};
export default Footer;