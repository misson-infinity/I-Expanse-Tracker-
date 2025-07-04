import { useState, useEffect } from 'react';
function getSavedValue(key, initialValue) {
    const savedValue = localStorage.getItem(key);
    if (savedValue) { try { return JSON.parse(savedValue); } catch (e) { return initialValue; } }
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));
    useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [value, key]);
    return [value, setValue];
}