import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                if (!localStorage.getItem(itemName)) 
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                const localStorageTodos = JSON.parse(localStorage.getItem(itemName));
                setItem(localStorageTodos);
                setLoading(false);
                setError(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, [itemName, initialValue]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {item, saveItem, loading, error};
}