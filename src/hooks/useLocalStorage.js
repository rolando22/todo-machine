import { useState } from 'react';

export function useLocalStorage(itemName, initialValue) {

    if (!localStorage.getItem(itemName)) 
        localStorage.setItem(itemName, JSON.stringify(initialValue));
    
    const localStorageTodos = JSON.parse(localStorage.getItem(itemName));

    const [item, setItem] = useState(localStorageTodos);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
}