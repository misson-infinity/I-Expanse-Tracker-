import React from 'react';
const Settings = ({ isDarkMode, onToggleDarkMode, onClearData }) => (
    <div className="settings-panel card">
        <h3>Settings</h3>
        <div>
            <label><input type="checkbox" checked={isDarkMode} onChange={onToggleDarkMode} /> Enable Dark Mode</label>
        </div>
        <div style={{ marginTop: '1rem' }}>
            <button onClick={onClearData} style={{ background: '#dc3545' }}>Clear All Data</button>
            <p><small>Warning: This will delete all your transactions permanently.</small></p>
        </div>
    </div>
);
export default Settings;