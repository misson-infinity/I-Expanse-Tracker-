import React from 'react';
import { FaTachometerAlt, FaCog, FaUserSecret } from 'react-icons/fa';
const Sidebar = ({ isOpen, onSetPage }) => (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
            <ul className="sidebar-nav">
                <li onClick={() => onSetPage('dashboard')}><FaTachometerAlt /> Dashboard</li>
                <li onClick={() => onSetPage('settings')}><FaCog /> Settings</li>
                <li onClick={() => onSetPage('developer')}><FaUserSecret /> Developer Info</li>
            </ul>
        </nav>
    </aside>
);
export default Sidebar;