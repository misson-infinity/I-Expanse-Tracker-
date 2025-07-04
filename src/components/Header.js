import React from 'react';
import { FaInfinity } from 'react-icons/fa';
import logo from '../assets/image (4).png';

const Header = ({ onToggleSidebar }) => (
    <header className="header">
        <h1><img src={logo} alt="Logo" />I Expense Tracker</h1>
        <button onClick={onToggleSidebar} className="menu-toggle">
            <FaInfinity />
        </button>
    </header>
);
export default Header;